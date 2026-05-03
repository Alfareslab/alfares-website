@echo off
title Al-Fares Lab - Local Server
echo ===================================================
echo    Starting Local Server for Al-Fares Lab
echo ===================================================
echo.
echo Attempting to start server on http://localhost:8000
echo.

cd ..

echo [1/2] Trying Python http.server...
python -m http.server 8000
if %ERRORLEVEL% EQU 0 goto end

echo.
echo [2/2] Python not found or failed. Trying Node.js (npx serve)...
call npx serve . -p 8000
if %ERRORLEVEL% EQU 0 goto end

echo.
echo ===================================================
echo [ERROR] Could not start local server!
echo You need either Python or Node.js installed to serve the site.
echo ===================================================
pause
exit /b 1

:end
pause
