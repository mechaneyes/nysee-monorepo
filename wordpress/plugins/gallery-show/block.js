const { registerBlockType } = wp.blocks;
const { TextareaControl, TextControl, Button, DatePicker } = wp.components;
const { useState, useEffect } = wp.element;

registerBlockType("custom-form/block", {
  title: "Gallery Show",
  icon: "feedback",
  category: "common",
  attributes: {
    opening: { type: "string", default: "" },
    artist: { type: "string", default: "" },
    show_title: { type: "string", default: "" },
    gallery: { type: "string", default: "" },
    gallery_address: { type: "string", default: "" },
    gallery_link: { type: "string", default: undefined },
    isSubmitted: { type: "boolean", default: false },
    show_notes: { type: "string", default: "" }, // Add show_notes attribute
  },
  edit: function (props) {
    const { attributes, setAttributes } = props;
    const [isSubmitted, setIsSubmitted] = useState(attributes.isSubmitted);
    const [openingDate, setOpeningDate] = useState(attributes.opening);

    useEffect(() => {
      // Initialize ACF field
      acf.getField("event_date").on("change", function (field) {
        setOpeningDate(field.val());
        setAttributes({ opening: field.val() });
      });
    }, []);

    const updateField = (field) => (value) => {
      setAttributes({ [field]: value });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      setIsSubmitted(true);
      setAttributes({ isSubmitted: true });
    };

    const fields = [
      { key: "artist", label: "Artist" },
      { key: "show_title", label: "Show Title" },
      { key: "gallery", label: "Gallery" },
      { key: "gallery_address", label: "Gallery Address" },
      { key: "gallery_map_link", label: "Gallery Map Link" },
      { key: "gallery_link", label: "Gallery Link" },
      { key: "show_closing", label: "Show Closing" },
      { key: "show_notes", label: "Show Notes" },
    ];

    const resetForm = () => {
      setIsSubmitted(false);
      setAttributes({ isSubmitted: false });
    };

    const handleDateChange = (date) => {
      setOpeningDate(date);
      setAttributes({ opening: date ? date.toISOString() : "" });
    };

    const clearDate = () => {
      setOpeningDate(null);
      setAttributes({ opening: "" });
    };

    function formatDate(date) {
      const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return formattedDate;
    }

    return (
      <div className="custom-form-block">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="acf-field">
              <label>Opening</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <DatePicker
                  currentDate={openingDate}
                  onChange={(date) => {
                    ~setOpeningDate(date);
                    setAttributes({ opening: formatDate(date) });
                  }}
                />
                <Button
                  isSecondary
                  onClick={clearDate}
                  style={{ marginLeft: "10px" }}
                >
                  Clear Date
                </Button>
              </div>
            </div>
            {fields.map((field) => {
              if (field.key === "show_notes") {
                return (
                  <TextareaControl
                    key={field.key}
                    label="Show Notes"
                    value={attributes.show_notes}
                    onChange={(value) => setAttributes({ show_notes: value })}
                    help="You can include HTML tags such as <h3>, <p>, etc."
                  />
                );
              }

              return (
                <TextControl
                  key={field.key}
                  label={field.label}
                  value={attributes[field.key]}
                  onChange={updateField(field.key)}
                />
              );
            })}
            <Button isPrimary type="submit">
              Submit
            </Button>
          </form>
        ) : (
          <div>
            <h3>Gallery Show Details:</h3>
            <p>Opening: {attributes.opening || "Not specified"}</p>
            {fields.map((field) => (
              <p key={field.key}>
                {field.label}: {attributes[field.key] || "Not specified"}
              </p>
            ))}
            <Button isPrimary onClick={resetForm}>
              Edit
            </Button>
          </div>
        )}
      </div>
    );
  },
  save: function ({ attributes }) {
    let domain = "";
    try {
      if (attributes.gallery_link) {
        const galleryLink = new URL(attributes.gallery_link);
        domain = galleryLink.hostname;
        domain = domain.split("/")[0];
      }
    } catch (error) {
      console.error("Invalid URL:", attributes.gallery_link);
      domain = attributes.gallery_link;
    }

    return (
      <>
        <div class="show">
          {attributes.opening && <p>Opening {attributes.opening}</p>}
          {attributes.artist && <h2>{attributes.artist}</h2>}
          {attributes.show_title ? <h3>{attributes.show_title}</h3> : "&nbsp;"}
          {attributes.gallery && <h3>{attributes.gallery}</h3>}
          {attributes.gallery_map_link && attributes.gallery_address ? (
            <a href={attributes.gallery_map_link}>
              <p>{attributes.gallery_address}</p>
            </a>
          ) : attributes.gallery_address ? (
            <p>{attributes.gallery_address}</p>
          ) : null}
          {attributes.gallery_link && (
            <a href={attributes.gallery_link}>
              <p>{domain}</p>
            </a>
          )}
          {attributes.show_closing && <p>Closing {attributes.show_closing}</p>}
          {attributes.show_notes && (
            <div dangerouslySetInnerHTML={{ __html: attributes.show_notes }} />
          )}
        </div>
      </>
    );
  },
});
