import ContainerDesktop from "./ContainerDesktopPage";
import ContainerMobile from "./ContainerMobilePage";

function Container() {
  return (
    <main>
      <ContainerMobile />
      <ContainerDesktop />
    </main>
  );
}

export default Container;
