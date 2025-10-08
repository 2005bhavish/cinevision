import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const PhotographyRegistration = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    participant_name: "",
    team_name: "",
    contact_details: "",
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      "participant_name",
      "team_name",
      "contact_details",
      "email",
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

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("photography_registrations")
        .insert([formData]);

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
            PHOTOGRAPHY WORKSHOP
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
          ].map(({ key, label }) => (
            <div className="space-y-2" key={key}>
              <Label htmlFor={key}>{label} *</Label>
              <Input
                id={key}
                name={key}
                type={key === "email" ? "email" : "text"}
                value={formData[key as keyof typeof formData]}
                onChange={handleInputChange}
                required
              />
            </div>
          ))}

          <Button
            type="submit"
            disabled={isSubmitting}
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

export default PhotographyRegistration;
