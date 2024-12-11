import Flowers from "./flowers";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[150vw] h-auto">
      <Flowers className="w-full h-auto translate-y-1/2" />
    </footer>
  );
}