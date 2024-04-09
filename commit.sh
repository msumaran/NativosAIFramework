#!/bin/bash

# Verificar si se proporcionó un mensaje de commit
if [ -z "$1" ]; then
  echo "Error: Debes proporcionar un mensaje de commit."
  exit 1
fi

# Realizar Git Pull
git pull || exit 1

# Agregar todos los archivos cambiados
git add .

# Hacer commit con el mensaje proporcionado
git commit -m "$1" || exit 1

# Empujar cambios al repositorio remoto
git push || exit 1

echo "Cambios subidos exitosamente."
