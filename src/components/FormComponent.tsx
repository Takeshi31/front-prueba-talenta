import { ChangeEventHandler, FormEventHandler, LegacyRef } from "react";

export default function FormComponent({ inputText, inputRef, handleChange, handleSubmit }: {
  inputText: string,
  inputRef: LegacyRef<HTMLInputElement>,
  handleChange: ChangeEventHandler<HTMLInputElement>,
  handleSubmit: FormEventHandler<HTMLFormElement>,
}) {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type="textarea"
        value={ inputText }
        ref={ inputRef }
        onChange={ handleChange }
        placeholder='Lorem ipsum' />
      <button type='submit' >Enviar texto</button>
    </form>
  );
};
