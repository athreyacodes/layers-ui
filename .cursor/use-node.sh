# Ensure a compatible Node.js is installed and first on PATH.
# The Cloud Agent base image ships an older Node than this project needs, so we
# install a pinned Node into $HOME (which persists in the environment build
# snapshot) and prepend it to PATH. Source this file from environment.json
# install/terminals so every phase uses the same Node.
NODE_VERSION="22.23.2"

case "$(uname -m)" in
  x86_64) NODE_ARCH="x64" ;;
  aarch64 | arm64) NODE_ARCH="arm64" ;;
  *) NODE_ARCH="x64" ;;
esac

NODE_DIR="$HOME/.local/node-${NODE_VERSION}-${NODE_ARCH}"

if [ ! -x "${NODE_DIR}/bin/node" ]; then
  echo "Installing Node ${NODE_VERSION} (${NODE_ARCH}) to ${NODE_DIR}..."
  mkdir -p "${NODE_DIR}"
  curl -fsSL "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-${NODE_ARCH}.tar.xz" \
    | tar -xJ -C "${NODE_DIR}" --strip-components=1
fi

export PATH="${NODE_DIR}/bin:$PATH"
