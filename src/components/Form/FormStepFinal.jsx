import React from "react";

function FormStepFinal({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="email"
        placeholder="Digite um email válido..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
    </div>
  );
}

export default FormStepFinal;
