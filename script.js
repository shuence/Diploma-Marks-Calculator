function calculator()
	{
		var name=document.calc.name.value;
		var firstobt=parseInt(document.calc.firstobt.value);
		var secondobt=parseInt(document.calc.secondobt.value);
		var firsttot=parseInt(document.calc.firsttot.value);
		var secondtot=parseInt(document.calc.secondtot.value);
		var thirdobt=parseInt(document.calc.thirdobt.value);
		var fourthobt=parseInt(document.calc.fourthobt.value);
		var thirdtot=parseInt(document.calc.thirdtot.value);
		var fourthtot=parseInt(document.calc.fourthtot.value);
		var fifthobt=parseInt(document.calc.fifthobt.value);
		var sixthobt=parseInt(document.calc.sixthobt.value);
		var fifthtot=parseInt(document.calc.fifthtot.value);
		var sixthtot=parseInt(document.calc.sixthtot.value);
				
		fsobt=(firstobt+secondobt)*.25;
		fstot=(firsttot+secondtot)*.25;
		tfobt=(thirdobt+fourthobt)*.50;
		tftot=(thirdtot+fourthtot)*.50;
		fsxobt=fifthobt+sixthobt;
		fsxtot=fifthtot+sixthtot;
		allobt=fsobt+tfobt+fsxobt;
		alltot=fstot+tftot+fsxtot;
		percen=(allobt/alltot)*100;
		if(percen)
		{
			document.write("<br><br><br><br><br><br><center>Congratulation "+name+"! Your percentage(%) have calculated.<br><br>You have got "+percen+"%.</center>");
		}
		else
		{
			document.write("<br><br><br><br><br><br><center>Something were wrong. Please input correct and valid data.<br>Try Again!</center>")
		}
	}