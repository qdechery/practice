@echo off
powershell -Command "Invoke-WebRequest http://websites.cobalt.com/wsm/exportDomainKeywordHistoriesForSpecialistView.mvc?webId=gmps-ba-wackerli&locale=en_US&graphMonths=12&graphUnit=MONTHS -OutFile gmps-ba-wackerli.xlsx"
