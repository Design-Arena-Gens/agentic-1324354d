export const metadata = {
  title: 'Expense Dashboard',
  description: 'Track your expenses',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: '#f9fafb' }}>{children}</body>
    </html>
  );
}
