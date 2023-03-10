import React from "react";

function FormStep1({ formData, setFormData }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Digite seu nome..."
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
    </div>
  );
}

export default FormStep1;
