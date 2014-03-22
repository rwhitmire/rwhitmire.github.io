# raspberry pi yadda yadda

Over the past few months I've been addicted to the combined simplicity and awesomeness of the Raspberry Pi. When my mom got me one of these for Christmas a year ago, I thought it would be something that sat around and collected dust. However, I constantly find myself doing productive, fun things with the Pi. To date here is a list of things I've accomplished with my small $40 computer

- Created a continuous integration build light for my software team (almost in production)
- Set up a media center for my basement which will soon be controlled by a Logitech Harmony remote
- Emulated a nintendo and played old games with friends
- Set up my own private cloud server
- Ran a node.js web server which can be accessed over the internet via DynDNS
- configured my Nexus 7 tablet as a monitor for the Raspberry Pi

While I could write entire books about any of these experiences, I'll be talking about the last one. I'm constantly on the go with my Raspberry Pi (I take it to work every day) and one of the most challenging parts of working on the machine is getting an SSH connection to it. I don't control the network at work and usually have to hardwire my laptop to the Pi with an ethernet cable, have a specific IP configuration for both devices, blah blah blah... It's a pain.

Yesterday, I spent about 2 hours searching the internet for a small portable TV. I wanted something high def and with an HDMI input. As it turns out, there is either a huge hole in the market, or I'm the only person looking for this kind of device. As I was looking for something with a 7" diagonal screen, it occurred to me that I have a very capable Nexus 7 tablet.

I started brainstorming and thinking about how I might be able to pull this off. I already knew I could connect over SSH or VNC through my local network. The problem with this approach is that I might not be able to pull that off while I'm on the go. I needed to be able to hardwire my tablet to the Nexus 7. After a fair amount of googling, I came accross >>>THIS MESSAGE BOARD<<<. At this point I knew it was possible. I'll get on with it because I know you really don't care why I did it, you just want to know HOW!

### Assumptions

- you have Raspbian installed on your Pi
- you have SSH access to your Pi
- you have a tablet that can either be USB tethered, or rooted

### List of ingredients to have this awesome setup:

- 1 Raspberry Pi computer
- 1 Bluetooth keyboard
- 1 Android tablet (needs to be able to USB tether - more on this later)
- 2 USB cables

### How they connect:

power outlet - usb cable - raspberry pi - usb cable - nexus 7 - bluetooth keyboard

### Configuring your Pi




### Configuring your Android Tablet

### Helpful Scripts
