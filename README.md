# Directory Plugin

For documentation on the plugin, please refer to our docs here https://developer.pex.me/plugins/directory

## Prerequisites

For using this plugin you should fulfill some prerequisites:

* **Edit directory.json:** The directory is located in the plugin. It's in the path `plugins/directory/assets/directory.json`. It has two parameters per contact:
  * name: It's used for the plugin for displaying the user in the dialog.
  * address: It's used for dial out and should be accessible for the Infinity Platform.
* **Provision Users:** The users should be provisioned in Infinity or some platform that is accessible for Infinity. If you want to provision some users in Infinity, you can do it by accessing to the Management Node and click on `"Users & Devices > Device Aliases"`. We can use the "Pexip Infinity Connect" app to register these users.
* **Configure Call Routing:** We need to instruct our Infinity how to reach our users. We call add a new routing in `"Services > Call Routing"`.