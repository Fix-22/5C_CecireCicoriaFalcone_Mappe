export const generateForm = (parentElement) => {
    let callback  ;

    return {
        build : function() {
        },
        onsubmit : function(inputCallback) {
            callback = inputCallback ;
        },
        render : function() {
            let html = `<form id="streetForm" class="container">
                <div class="input-group">
                    <label class="input-group-text">Via</label>
                    <input type="text" id="streetInput" class="form-control" />
                    <button type="button" id="submitButton" class="btn btn-primary">Invia</button>
                </div>
            </form>` ;

            parentElement.innerHTML = html ;

            const submitButton = document.getElementById('submitButton') ;

            submitButton.onclick = () => {
                let address = document.getElementById('streetInput').value ;
                console.log('address: ' + address) ;
                console.log(callback) ;
                callback(address) ;
            }
        }
    }
};