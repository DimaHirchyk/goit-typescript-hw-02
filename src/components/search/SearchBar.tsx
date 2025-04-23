import toast, { Toaster } from "react-hot-toast";
import css from "./Searchbar.module.css";
import { FormEvent } from "react";

type Props = {
  onSearch: (topic: string) => void;
};

export default function Searchbar({ onSearch }: Props) {
  // function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   const form = event.currentTarget;
  //   const input = form.elements.namedItem("inp") as HTMLInputElement;
  //   console.log(input.value);
  // }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const topic = (
      form.elements.namedItem("inp") as HTMLInputElement
    ).value.trim();
    if (topic === "") {
      toast.error("Введіть текст");
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <>
      <header>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.inp}
            name="inp"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
