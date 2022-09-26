type InputProps = {
id: string;
label: string;
};

export default function Input(prop: InputProps) {
  return (
    <div className="p-4">
      <label className="block" htmlFor={prop.id}>{prop.label}</label>
      <input id={prop.id} className="p-1 border-black border-2" type="text" />
    </div>
  );
}
