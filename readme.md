# Installation
1. brew install node
2. npm install -g expo-cli
3. git clone https://github.com/andrejs/instaTimer.git
4. cd instaTimer/
5. npm install

No need to perform the first step if recent node and npm versions installed.

It might ask for CocoaPods and maybe it fails so we need to run
cd ./instaTimer/ios && pod install

# To run do
In the instaTimer folder:
`expo start` (or just `npm start`)

It will start the Metro Bundler and open it in a browser tab.

# On mobile device
1. Install the "Expo" app
2. Scan QR code from the Metro Bundler
