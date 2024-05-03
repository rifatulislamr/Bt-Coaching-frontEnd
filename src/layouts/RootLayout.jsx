import Sidebar from "./sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex gap-5 ">
      <Sidebar />

      <main className="max-w-full flex-1 mx-auto py-4 px-4">{children}</main>
    </div>
  );
}

export default RootLayout;
