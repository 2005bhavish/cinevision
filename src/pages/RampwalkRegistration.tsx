import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const RampwalkRegistration = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [screenshotUrl, setScreenshotUrl] = useState("");

  const [formData, setFormData] = useState({
    participant_name: "",
    team_name: "",
    contact_details: "",
    email: "",
    transaction_id: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error } = await supabase.storage
        .from("payment-screenshots")
        .upload(filePath, file);

      if (error) throw error;

      const { data: publicUrlData } = supabase.storage
        .from("payment-screenshots")
        .getPublicUrl(filePath);

      setScreenshotUrl(publicUrlData.publicUrl);

      toast({
        title: "Success",
        description: "Payment screenshot uploaded successfully",
      });
    } catch (error: any) {
      console.error("Error uploading file:", error);
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      "participant_name",
      "team_name",
      "contact_details",
      "email",
      "transaction_id",
    ];

    const missingFields = requiredFields.filter(
      (field) => !formData[field as keyof typeof formData]
    );

    if (missingFields.length > 0) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!screenshotUrl) {
      toast({
        title: "Missing screenshot",
        description: "Please upload payment screenshot",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // ✅ Check for duplicate transaction_id
      const { data: existing, error: checkError } = await supabase
        .from("rampwalk_registrations")
        .select("id")
        .eq("transaction_id", formData.transaction_id)
        .single();

      if (checkError && checkError.code !== "PGRST116") throw checkError;

      if (existing) {
        toast({
          title: "Duplicate Transaction",
          description: "This transaction ID has already been used. Please check and try again.",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase
        .from("rampwalk_registrations")
        .insert([{ ...formData, payment_screenshot_url: screenshotUrl }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Registration submitted successfully",
      });

      navigate("/confirmation");
    } catch (error: any) {
      console.error("Error submitting registration:", error);
      toast({
        title: "Submission failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-7xl mb-4 tracking-wider text-film-red">
            RAMPWALK
          </h1>
          <p className="text-lg text-muted-foreground">Registration Form</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-card border border-border p-8 rounded-lg"
        >
          {[
            { key: "participant_name", label: "Participant Name" },
            { key: "team_name", label: "Team Name" },
            { key: "contact_details", label: "Contact Details (Phone)" },
            { key: "email", label: "Email" },
            { key: "transaction_id", label: "Transaction ID" },
          ].map(({ key, label }) => (
            <div className="space-y-2" key={key}>
              <Label htmlFor={key}>{label} *</Label>
              <Input
                id={key}
                name={key}
                type={key === "email" ? "email" : key === "contact_details" ? "tel" : "text"}
                value={formData[key as keyof typeof formData]}
                onChange={handleInputChange}
                required
              />
            </div>
          ))}

          <div className="space-y-2">
            <Label htmlFor="screenshot">Payment Screenshot *</Label>
            <div className="flex items-center gap-4">
              <Input
                id="screenshot"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                disabled={uploading}
                className="flex-1"
              />
              {uploading && <Loader2 className="w-5 h-5 animate-spin" />}
              {screenshotUrl && !uploading && (
                <span className="text-sm text-green-500">✓ Uploaded</span>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || uploading}
            className="w-full bg-film-red hover:bg-film-red/90 text-white font-sans tracking-widest"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "SUBMIT REGISTRATION"
            )}
          </Button>
        </form>

        <div className="text-center mt-8">
          <button
            type="button"
            onClick={() => navigate("/events")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default RampwalkRegistration;
