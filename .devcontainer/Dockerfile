# Colab's CPU runtime, restricted to what the labs use: Ubuntu 24.04, Python 3.13 as
# the system Python (no virtual environment, so `!pip install`, `!uv pip install` and
# `--system` all reach it, as in Colab), Colab's versions of the packages
# (requirements.txt), Java for PySpark, Graphviz's `dot` and the X and OpenGL libraries
# opencv-python loads, and root (`!apt install` works as is).
# The base pinned, so that the image's tag (labs/scripts/codespace_image.py) names
# what it holds.
FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04@sha256:d94c97dd9cacf183d0a6fd12a8e87b526e9e928307674ae9c94139139c0c6eae
# GHCR links the image to the repository that builds it.
LABEL org.opencontainers.image.source=https://github.com/shuuchuu/slides
# The package lists stay, so that a notebook's `!apt install` needs no update.
RUN apt-get update && apt-get install -y --no-install-recommends \
      build-essential file graphviz libgl1 libxcb1 openjdk-21-jre-headless tree \
      unzip zstd
COPY --from=ghcr.io/astral-sh/uv:0.12.15 /uv /uvx /usr/local/bin/
RUN UV_PYTHON_INSTALL_DIR=/opt/python uv python install 3.13 \
 && ln -s /opt/python/cpython-3.13.*/ /opt/python/current \
 && find /opt/python/current/lib -name EXTERNALLY-MANAGED -delete
# Colab sets the same two uv variables: installs go to the system Python, and can't
# replace its packages' versions.
ENV PATH=/opt/python/current/bin:$PATH \
    UV_SYSTEM_PYTHON=1 \
    PIP_ROOT_USER_ACTION=ignore
COPY requirements.txt /opt/requirements.txt
RUN uv pip install --no-cache --index-strategy unsafe-best-match \
      --extra-index-url https://download.pytorch.org/whl/cpu -r /opt/requirements.txt
ENV UV_CONSTRAINT=/opt/requirements.txt
# `lab <name>` fetches a notebook into the Codespace, which holds none to begin with.
COPY lab /usr/local/bin/lab
# VS Code reads no folding from a notebook: `lab` installs this extension, which folds
# the hints and solutions Colab collapses. A VSIX is a zip of the extension under
# `extension/`.
COPY fold-solutions /tmp/vsix/extension
RUN cd /tmp/vsix && python -m zipfile -c /opt/fold-solutions.vsix extension \
 && rm -r /tmp/vsix
