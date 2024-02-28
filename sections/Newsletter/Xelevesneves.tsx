export interface Props {
  title: string;
}

export default function Xelevesneves({ title }: Props) {
  return (
    <div>
      <h1 class="font-bold">{title}</h1>
      <p>This is an examplaw section</p>
    </div>
  );
}