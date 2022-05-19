import FusePageCarded from "@fuse/core/FusePageCarded";

function Example() {
  return (
    <FusePageCarded
      classes={{
        content: "flex",
        contentCard: "overflow-hidden",
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136",
      }}
      header={<div>HEader</div>}
      contentToolbar={<div>Toolbar</div>}
      content={
        <div className="w-full h-400">
          <h1>Content</h1>
        </div>
      }
      innerScroll
    />
  );
}

export default Example;
