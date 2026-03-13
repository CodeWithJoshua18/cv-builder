import { useState } from "react";

export default function GeneralInformation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert("details picked");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="josh"
            type="text"
          />
        </label>
        <label htmlFor="">
          Email:
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tom@gmail.com"
          />
        </label>
        <label>
          PhoneNumber:
          <input
            type="number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+254"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
