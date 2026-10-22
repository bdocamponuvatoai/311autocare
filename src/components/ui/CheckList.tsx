import { Icon } from "./Icon";

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="simple-list">
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" />
          {item}
        </li>
      ))}
    </ul>
  );
}
