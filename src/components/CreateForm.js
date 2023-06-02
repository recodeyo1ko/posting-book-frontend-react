import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function CreateForm(props) {
  return (
    <form>
      <div>
      <TextField
        label="title"
        id="title"
        value={props.inputs["title"]}
        onChange={(e) => props.onChange("title",e)}
        />
      </div>

      <div>
        <TextField
          label="body"
          id="body"
          value={props.inputs["body"]}
          onChange={(e) => props.onChange("body",e)}
        />
      </div>

      <div>
        <Button onClick={props.onSubmit}
        >
          Create
        </Button>
      </div>
    </form>
  )
}

export default CreateForm;