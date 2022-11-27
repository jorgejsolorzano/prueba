const gitRemoteOriginUrl = require("git-remote-origin-url");
const GitUrlParse = require("git-url-parse");
const fs = require('fs');
const os = require('os');
const axios = require('axios');
const path = require('path');

const WINDOWS = 'Windows_NT';
const MACOS = 'Darwin';
const LINUX = 'Linux';
const USERNAME = os.userInfo().username;
const WINDOWS_PATH = `C:\\Users\\${USERNAME}\\.gitconfig`;
const MACOS_PATH = `${os.homedir()}/.gitconfig`;
const LINUX_PATH = `${os.homedir()}/.gitconfig`;
function getGitEmail() {
  switch (os.type()) {
    case WINDOWS:
      return getEmail(WINDOWS_PATH);
    case MACOS:
      return getEmail(MACOS_PATH);
    case LINUX:
      return getEmail(LINUX_PATH);
  }