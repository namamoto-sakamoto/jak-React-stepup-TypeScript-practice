export const Practice4 = () => {
  //Parameter 'num' implicitly has an 'any' type.
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習問題：設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題４を実行</button>
    </div>
  );
};
