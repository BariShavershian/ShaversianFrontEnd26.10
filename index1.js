a=prompt("enter any number"); 
b=prompt("enter any number"); 
c=prompt("enter any number"); 
if((b<a && a<c) || (c<a && a<b)) alert(a);
if((a<b && b<c) || (c<b && b<a)) alert(b);
if((a<c && c<b) || (b<c && c<a)) alert(c);