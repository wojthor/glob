import React from "react";
import Navbar from "../components/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const reqUrl =
  "http://localhost/wordpress/wp-json/contact-form-7/v1/contact-forms/65/feedback";

const showToastMessage = (message, type) => {
  toast[type](message);
};

const postFormData = async (formData) => {
  const reqOptions = {
    method: "POST",
    body: formData,
  };

  const req = await fetch(reqUrl, reqOptions);
  const response = await req.json();

  console.log(response);
  return response;
};

function Contact() {
  const reset = () => {
    document.getElementById("myForm").reset();
  };
  const queryClient = useQueryClient();

  const mutation = useMutation(postFormData, {
    onSuccess: () => {
      showToastMessage("Wiadomość została pomyślnie wysłana!", "success");
      queryClient.invalidateQueries("nazwaZapytania");
      reset();
    },
    onError: (error) => {
      showToastMessage("Wystąpił błąd podczas wysyłania wiadomości.", "error");
      console.error("Błąd wysyłania wiadomości:", error);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (
      !formData.get("your-name") ||
      !formData.get("your-email") ||
      !formData.get("your-subject") ||
      !formData.get("your-message")
    ) {
      showToastMessage("Wypełnij wszystkie pola formularza.", "error");
      return;
    }

    mutation.mutate(formData);
  };

  return (
    <>
      <div className="d-flex  justify-content-center w-100 flex-row ">
        <Navbar />
      </div>
      <div className="d-flex gap-4 align-items-center w-100 flex-column pt-5 contact">
        <h2 className="headi">Formularz kontaktowy</h2>
        <div className="d-flex  align-items-center w-75 flex-column ">
          <Form
            onSubmit={handleSubmit}
            className="d-flex w-50 flex-column gap-3 form"
            id="myForm"
          >
            <div className="d-flex flex-row  gap-2">
              <Form.Group className="d-flex  w-50">
                <Form.Control
                  type="name"
                  placeholder="Imię i nazwisko"
                  name="your-name"
                />
              </Form.Group>

              <Form.Group className="d-flex  w-50">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="your-email"
                />
              </Form.Group>
            </div>

            <Form.Group className="">
              <Form.Control
                type="subject"
                placeholder="Temat"
                name="your-subject"
              />
            </Form.Group>

            <Form.Group className="">
              <Form.Control
                as="textarea"
                rows={3}
                type="textarea"
                placeholder="Wiadomość"
                name="your-message"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Wyślij wiadomość
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Contact;
