function isBalanced(str){
  while (str.length > 0){
    let len = str.length;

    str = str.replace('()', '');
    str = str.replace('{}', '');
    str = str.replace('[]', '');
    if(str.length === len){
      return false;
    }
  }
  return true;
}
