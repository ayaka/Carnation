function Layout(props) {
  return (
    <div>
      {/* navbar here */}
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
