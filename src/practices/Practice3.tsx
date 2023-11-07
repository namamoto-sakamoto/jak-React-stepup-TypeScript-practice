export const Practice3 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    // return total.toString();
    return total;
    console.log(total);
  };

  const onClickPractice = () => {
    //ここ
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題：変数の型指定</p>
      <button onClick={onClickPractice}>練習問題３を実行</button>
    </div>
  );
};
