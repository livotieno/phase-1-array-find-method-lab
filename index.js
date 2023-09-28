function superbowlWin(record){
      const win = record.find((item) => {
        return item.result === "W";});

        if (win){
            return win.year;}
            else{return undefined;}

}
    