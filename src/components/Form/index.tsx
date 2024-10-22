import { ChangeEvent, FormEvent, useState } from "react";
import { IPost } from "../../types";
import { Button, FormContainer, Input } from "./styles";

interface FormProps {
  createNewPost: (post: IPost) => void;
}

export function Form({ createNewPost }: FormProps) {
  const [formDate, setFormDate] = useState<IPost>({
    category: "",
    title: "",
    author: "",
    date: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setIsSubmitting(true);
    //simulando chamada api

    setTimeout(() => {
      createNewPost(formDate);
      setFormDate({
        category: "",
        title: "",
        author: "",
        date: "",
      });
      setIsSubmitting(false);
    }, 2000);
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormDate({
      ...formDate,
      [name]: value,
    });
  }

  const { title, author, category, date } = formDate;

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Título"
        name="title"
        onChange={handleInputChange}
        value={title}
      />
      <Input
        type="text"
        placeholder="Author"
        name="author"
        onChange={handleInputChange}
        value={author}
      />
      <Input
        type="text"
        placeholder="Categoria"
        name="category"
        onChange={handleInputChange}
        value={category}
      />
      <Input
        type="text"
        placeholder="Data"
        name="date"
        onChange={handleInputChange}
        value={date}
      />
      <Button variant="primary" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Publicar Post"}
      </Button>
    </FormContainer>
  );
}
