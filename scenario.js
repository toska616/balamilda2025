const textGame = new TextGame();

const branch_1 = new Branch("branch_1", null)
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/개발배경1.jpg"),
    TextBarEvent.text(null, "텍스트출력"),
    DelayEvent.delay(2000)
  ])
  .addEventsAsPage([
    TextBarEvent.text("등장인물", "대사출력")
  ])
  .addTextPage(
    null,
    "텍스트출력"
  )
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/개발배경2.jpg"),
    DelayEvent.delay(500),
    TextBarEvent.text(null, "배경변경")
  ])
  .addEventsAsPage([
    TextBarEvent.text(
      "등장인물",
      "새소리출력"
    ),
    SoundEvent.sfx("audio/Bird.mp3")
  ])
  .addEventsAsPage([
    TextBarEvent.text(
      "등장인물",
      "발소리출력"
    ),
    SoundEvent.sfx("audio/Walk.mp3")
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "shadow",
      "images/characters/Shadow.png",
      modelPosition.left,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("이미지", "출력테스트")
  ])
  .addEventsAsPage([
    CanvasEvent.removeObject("shadow", imageHideType.Disappear),
    TextBarEvent.text(null, "배경변경, 배경음출력"),
    CanvasEvent.changeBackGround("images/backgrounds/개발배경1.jpg"),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/Confession.mp3")
  ])
  .addTextPage(null, "---")
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/home.jpg"),
    DelayEvent.delay(500),
    SoundEvent.stopbackground(),
    TextBarEvent.text(null, "배경음정지")
  ])
  .addEventsAsPage([
    TextBarEvent.text(
      null,
      "선택지출력"
    ),
    TextBarEvent.branch([
      new BranchPair("1번선택지", "branch_1_1"),
      new BranchPair("2번선택지", "branch_1_2"),
      new BranchPair("3번선택지", "branch_1_3")
    ])
  ]);
textGame.addBranch(branch_1);

const branch_1_1 = new Branch("branch_1_1", "branch_2")
  .addTextPage(null, "첫번째 선택지 출력 텍스트")
  .addTextPage(
    "등장인물",
    "첫번째 선택지 출력 텍스트 종료입니다."
  );
textGame.addBranch(branch_1_1);

const branch_1_2 = new Branch("branch_1_2", "branch_2")
  .addTextPage(null, "두번째 선택지 출력 텍스트")
  .addTextPage(
    "등장인물",
    "두번째 선택지 출력 텍스트 종료입니다."
  );
textGame.addBranch(branch_1_2);

const branch_1_3 = new Branch("branch_1_3", "branch_2")
  .addTextPage(null, "세번째 선택지 출력 텍스트")
  .addTextPage(
    "등장인물",
    "세번째 선택지 출력 텍스트 종료입니다."
  );
textGame.addBranch(branch_1_3);

const branch_2 = new Branch("branch_2", null)
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/개발배경2.jpg"),
    DelayEvent.delay(500),
    TextBarEvent.text(null, "이벤트 종료 후 배경지 변환")
  ])
  .addTextPage(
    null,
    "종료텍스트 3"
  )
  .addTextPage(
    null,
    "종료텍스트 2"
  )
  .addTextPage(
    null,
    "종료텍스트 1"
  );
textGame.addBranch(branch_2);
