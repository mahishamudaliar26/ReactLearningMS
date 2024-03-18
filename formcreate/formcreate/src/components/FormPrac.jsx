import React, { useEffect } from "react";
import swal from "sweetalert";

function FormPrac() {
  swal({
    title: "Are you sure?",
    text: "You will not be able to recover this  file!",
    type: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, keep it",
    background: "#FFBF00",
  }).then(
    function () {
      swal("Deleted!", "Your file has been deleted.", "success");
    },
    function (dismiss) {
      if (dismiss === "cancel") {
        swal("Cancelled", "Your imaginary file is safe :)", "error");
      }
    }
  );
  return <div>FormPrac</div>;
}

export default FormPrac;
