class Modal {}

Modal.patterns={
    container:'div.modal-container'
  , input:'//span[text()="{0}"]/parent::label/following-sibling::input'
  , select:'//span[text()="{0}"]/parent::span/following-sibling::div/'+
        'child::div/child::div/child::div/child::a'
  , option:'//a[text()="{0}"]'
  , textarea:'//span[text()="{0}"]/parent::label/following-sibling::textarea'
  , save:'div.modal-container button[title="Save"]'
  , saveAndNew:'div.modal-container button[title="Save & New"]'
  , cancel:'div.modal-container button[title="Cancel"]'
  , close:'div.modal-container button[title="Close this window"]'
  , delete:'div.modal-container button[title="Delete"]'
  , delete2:'//span[text()="Delete"]/parent::button'
  , messageValidation:'div.modal-container span.genericError'
  , errorsList:'ul.errorsList li:nth-child(1)'
};

module.exports=Modal;

