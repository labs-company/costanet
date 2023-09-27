type TyUsername = {
  name: string;
  email: string;
  telephone: string;
  coment: string;
};

export default function Resend({ name, email, telephone, coment }: TyUsername) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{telephone}</p>
      <p>{coment}</p>
    </div>
  );
}
