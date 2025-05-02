@echo off
echo Network Reset and Renewal Script
echo --------------------------------
echo.

echo Flushing DNS...
ipconfig /flushdns
echo.

echo Releasing IP...
ipconfig /release
echo.

echo Renewing IP...
ipconfig /renew
echo.

echo Resetting Winsock...
netsh winsock reset
echo.

echo Displaying new IP configuration...
ipconfig /all
echo.

echo Script completed.
pause