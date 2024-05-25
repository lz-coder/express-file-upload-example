
const fileInput = document.querySelector("#file-picker");
async function uploadFile() {
  try {
    var formdata = new FormData();
    console.log(fileInput.files[0]);
    formdata.append("files", fileInput.files[0]);

    console.log(formdata);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    const response = await fetch(`http://localhost:3000/upload/${fileInput.files[0].name}`, requestOptions);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.log('error', error);
  }
}
