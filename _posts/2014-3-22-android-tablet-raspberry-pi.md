# Using an Android Tablet as a Raspberry Pi Monitor

Over the past few months I've been addicted to the combined simplicity and awesomeness of the Raspberry Pi. When my mom got me one of these for Christmas, I thought it would be something that sat around and collected dust. However, I constantly find myself doing productive, fun things with the Pi. To date here is a list of things I've accomplished with my small $40 computer

- Created a continuous integration build light for my software team (almost in production)
- Set up a media center for my basement which will soon be controlled by a Logitech Harmony remote
- Emulated a Nintendo and played games from my childhood with friends
- Set up my own private cloud server
- Ran a node.js web server which can be accessed over the internet via DynDNS
- configured my Nexus 7 tablet as a monitor for the Raspberry Pi

While I could write entire books about any of these experiences, I'll be talking about the last one. I'm constantly on the go with my Raspberry Pi (I take it to work every day) and one of the most challenging parts of working on the machine is getting an SSH connection to it. I don't control the network at work and usually have to hardwire my laptop to the Pi with an ethernet cable, have a specific IP configuration for both devices, blah blah blah... It's a pain.

Yesterday, I spent about 2 hours searching the internet for a small portable TV. I wanted something high def and with an HDMI input. As it turns out, there is either a huge hole in the market, or I'm the only person looking for this kind of device. As I was looking for something with a 7" screen, it occurred to me that I have a very capable Nexus 7 tablet.

I started brainstorming and thinking about how I might be able to pull this off. I already knew I could connect over SSH or VNC through my local network. The problem with this approach is that I might not have a network while I'm on the go. I went to CodeMash in January, and wanted to hack on my Pi so badly, but I didn't have a device with HDMI, or a USB keyboard with me. If only I knew I could have used my little tablet and Logitech bluetooth keyboard. Here's what I should have done before heading off to CodeMash.

### Assumptions

- you have Raspbian installed on your Pi
- you have terminal access to your Pi
- you have a tablet that can either be USB tethered, or rooted

### List of ingredients to have this awesome setup:

- 1 Raspberry Pi computer
- 1 Bluetooth keyboard
- 1 Android tablet (needs to be able to USB tether - more on this later)
- 2 USB cables

### How they connect:

This is my favorite part of this approach. Sometimes working on the Pi is a pain because you have cables and devices all over the place. When I initially set up a Raspberry Pi, I need keyboard, ethernet cable, hdmi cable, power cable, mouse, 46" TV with HDMI input and my girlfriend can't watch TV. Here's what my setup looks like now:

power outlet - usb cable - raspberry pi - usb cable - nexus 7 - bluetooth keyboard - (happy girlfriend watching TV)

Another neat thing about this approach is that while you're tethering via USB, my tablet is also pulling some charge through the connection. The amount of power left over to charge the device is minimal, but The tablet's battery will last quite a bit longer this way.

### Configuring your Pi

First, you're going to want to set up a static IP address for your usb connection.

`sudo nano /etc/network/interfaces`

Append the following lines to the end of the file

```
CODE HERE
```

Next, install your VNC Server (or move on if you don't care about the GUI)

```
CODE HERE
```

### Configuring your Android Tablet

This was the biggest challenge I had to overcome. If you have Android 4.4, Google removed the ability to USB tether on WiFi only devices. If your device is able to tether through USB, you can skip forward to the next section. I ended up installing the incredibly awesome Cyanogenmod. If your device is compatible, I'd strongly recommend this approach. If your device isn't compatible, you'll have to find some way to root your device.

Once I had Cyanogenmod installed, the following option showed up in my settings.

Enabling tethering will give your Pi an IP address and your tablet will now have SSH and VNC access. Now you just need some apps. For SSH, I use VX ConnectBot. Using this app with a bluetooth keyboard is pretty close to the same experience you would have if you were hacking right on the Pi.

For my VNC connection, I use VNC Viewer.

### Helpful Scripts

### Credits

I wish I could tell you I came up with all of this stuff on my own, but I didn't, so here are the people who deserve credit.

## Final Thoughts

If you like computers, and you don't have a Raspberry Pi, GO BUY ONE. It's hard to have buyer's remorse over a $40 computer that fits in the palm of your hand.
