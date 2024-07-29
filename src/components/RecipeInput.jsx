import React from "react";

function FormInput({ type, name, label }) {
  return (
    <div className="w-full">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">{name}</span>
        </div>
        <input
          type={type}
          name={name}
          placeholder={label}
          className="input input-bordered w-full max-w-xs "
          required
        />
      </label>
    </div>
  );
}

export default FormInput;
