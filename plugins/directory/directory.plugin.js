(function() {

  const directoryPath = './custom_configuration/plugins/directory/assets/directory.json';
  let directoryData;

  function load() {
    fetch(directoryPath).then( (res) => {
      if (res.status === 200) res.json().then( (data) => directoryData = data);
    });
  }

  function unload() {
    console.log('Directory Plugin', 'Unloaded');
  }

  function showDialog() {
    PEX.pluginAPI.openTemplateDialog({
      title: 'Invite from Directory',
      body: 
        '<p>Choose a participant:&nbsp;' +
          '<select id="select-plugin-directory">' +
            directoryData.map((participant) => `<option value="${participant.address}">${participant.name}</option>`) +
          '</select>' +
          '</p>' +
          '<button id="submit-plugin-directory" class="dialog-button green-action-button">Invite</button>'
    }).then( (dialog) => {
      const submitButton = document.getElementById('submit-plugin-directory');
      submitButton.onclick = () => {
        const alias = document.getElementById('select-plugin-directory').value;
        const protocol = 'auto';
        const role = 'guest';
        const callback = (value) => console.log(value);
        const params = {streaming: false};
        window.PEX.pluginAPI.dialOut(alias, protocol, role, callback, params);
        dialog.close();
      };
    });
  }

  PEX.pluginAPI.registerPlugin({
    id: 'directory-plugin-1.0',
    load: load,
    unload: unload,
    showDialog: showDialog,
  });

})();