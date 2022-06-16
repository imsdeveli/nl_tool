const Preview = (props) => {
  let htmlToRender = `${props.templateString}`;
  // console.log("htmltorender:", htmlToRender);
  return (
    <div className="Preview">
      <div
        class="card mb-4 scroll-box"
        style={{ height: "66vh" }}
        dangerouslySetInnerHTML={{ __html: htmlToRender }}
      ></div>
    </div>
  );
};

export default Preview;
