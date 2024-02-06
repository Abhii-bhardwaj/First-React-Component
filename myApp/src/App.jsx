import Header from "./Header";
import Post from "./Post";
import Footer from "./Footer";
function App() {
  const styles = {};

  return (
    <>
      <div className="FrontPage">
        <Header />
        <Post />
        <Footer />
        <Header />
        <Post />
        <Footer />
      </div>
    </>
  );
}

export default App;
