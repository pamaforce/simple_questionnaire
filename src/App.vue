<template>
  <div class="main" id="app">
    <div class="content">
      <p class="title">2022-2023学年春季学期开学初思想动态调研问卷</p>
      <p class="sub-title">（2023年2月）</p>
      <!-- Question 1 -->
      <p class="question" id="q1"><span>1.</span>您的性别是：</p>
      <div class="options options-line">
        <checkbox
          @calc="calcProgress"
          :value="a_1"
          :text="options_text[1][0]"
          :single="true"
          @change="(val) => ((a_1 = val), (b_1 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_1"
          :text="options_text[1][1]"
          :single="true"
          @change="(val) => ((b_1 = val), (a_1 = false))"
        />
      </div>
      <!-- Question 2 -->
      <p class="question" id="q2"><span>2.</span>您的民族是：</p>
      <div class="options options-line">
        <input
          class="input"
          type="text"
          placeholder="请输入"
          v-model="a_2"
          @change="calcProgress"
        />
      </div>
      <!-- Question 3 -->
      <p class="question" id="q3"><span>3.</span>您的生源地所在区域是：</p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_3"
          :text="options_text[3][0]"
          :single="true"
          @change="
            (val) => ((a_3 = val), (b_3 = c_3 = d_3 = e_3 = f_3 = g_3 = false))
          "
        />
        <checkbox
          @calc="calcProgress"
          :value="b_3"
          :text="options_text[3][1]"
          :single="true"
          @change="
            (val) => ((b_3 = val), (a_3 = c_3 = d_3 = e_3 = f_3 = g_3 = false))
          "
        /><checkbox
          @calc="calcProgress"
          :value="c_3"
          :text="options_text[3][2]"
          :single="true"
          @change="
            (val) => ((c_3 = val), (b_3 = a_3 = d_3 = e_3 = f_3 = g_3 = false))
          "
        />
        <checkbox
          @calc="calcProgress"
          :value="d_3"
          :text="options_text[3][3]"
          :single="true"
          @change="
            (val) => ((d_3 = val), (b_3 = c_3 = a_3 = e_3 = f_3 = g_3 = false))
          "
        /><checkbox
          @calc="calcProgress"
          :value="e_3"
          :text="options_text[3][4]"
          :single="true"
          @change="
            (val) => ((e_3 = val), (b_3 = c_3 = d_3 = a_3 = f_3 = g_3 = false))
          "
        />
        <checkbox
          @calc="calcProgress"
          :value="f_3"
          :text="options_text[3][5]"
          :single="true"
          @change="
            (val) => ((f_3 = val), (b_3 = c_3 = d_3 = e_3 = a_3 = g_3 = false))
          "
        />
        <checkbox
          @calc="calcProgress"
          :value="g_3"
          :text="options_text[3][6]"
          :single="true"
          @change="
            (val) => ((g_3 = val), (b_3 = c_3 = d_3 = e_3 = f_3 = a_3 = false))
          "
        />
      </div>
      <!-- Question 4 -->
      <p class="question" id="q4"><span>4.</span>您是：</p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_4"
          :text="options_text[4][0]"
          :single="true"
          @change="
            (val) => (
              (a_4 = val), ((b_4 = c_4 = false), (max_val = val ? 5 : 3))
            )
          "
        />
        <checkbox
          @calc="calcProgress"
          :value="b_4"
          :text="options_text[4][1]"
          :single="true"
          @change="
            (val) => (
              (b_4 = val), ((a_4 = c_4 = false), (max_val = val ? 3 : 3))
            )
          "
        />
        <checkbox
          @calc="calcProgress"
          :value="c_4"
          :text="options_text[4][2]"
          :single="true"
          @change="
            (val) => (
              (c_4 = val), ((a_4 = b_4 = false), (max_val = val ? 4 : 3))
            )
          "
        />
      </div>
      <!-- Question 5 -->
      <p class="question" id="q5"><span>5.</span>您的年级是：</p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_5"
          :text="options_text[5][0]"
          :single="true"
          @change="
            (val) => ((a_5 = val), (b_5 = c_5 = d_5 = e_5 = f_5 = false))
          "
        />
        <checkbox
          @calc="calcProgress"
          :value="b_5"
          :text="options_text[5][1]"
          :single="true"
          @change="
            (val) => ((b_5 = val), (a_5 = c_5 = d_5 = e_5 = f_5 = false))
          "
        />
        <checkbox
          @calc="calcProgress"
          :value="c_5"
          :text="options_text[5][2]"
          :single="true"
          @change="
            (val) => ((c_5 = val), (b_5 = a_5 = d_5 = e_5 = f_5 = false))
          "
        />
        <checkbox
          @calc="calcProgress"
          :value="d_5"
          :text="options_text[5][3]"
          v-if="max_val > 3"
          :single="true"
          @change="
            (val) => ((d_5 = val), (b_5 = c_5 = a_5 = e_5 = f_5 = false))
          "
        />
        <checkbox
          @calc="calcProgress"
          :value="e_5"
          :text="options_text[5][4]"
          v-if="max_val > 4"
          :single="true"
          @change="
            (val) => ((e_5 = val), (b_5 = c_5 = d_5 = a_5 = f_5 = false))
          "
        />
        <checkbox
          @calc="calcProgress"
          :value="f_5"
          :text="options_text[5][5]"
          :single="true"
          @change="
            (val) => ((f_5 = val), (b_5 = c_5 = d_5 = e_5 = a_5 = false))
          "
        />
      </div>
      <!-- Question 6 -->
      <p class="question" id="q6"><span>6.</span>您的政治面貌：</p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_6"
          :text="options_text[6][0]"
          :single="true"
          @change="(val) => ((a_6 = val), (b_6 = c_6 = d_6 = e_6 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_6"
          :text="options_text[6][1]"
          :single="true"
          @change="(val) => ((b_6 = val), (a_6 = c_6 = d_6 = e_6 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_6"
          :text="options_text[6][2]"
          :single="true"
          @change="(val) => ((c_6 = val), (b_6 = a_6 = d_6 = e_6 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_6"
          :text="options_text[6][3]"
          :single="true"
          @change="(val) => ((d_6 = val), (b_6 = c_6 = a_6 = e_6 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_6"
          :text="options_text[6][4]"
          :single="true"
          @change="(val) => ((e_6 = val), (b_6 = c_6 = d_6 = a_6 = false))"
        />
      </div>
      <!-- Question 7 -->
      <p class="question" id="q7"><span>7.</span>您的专业所属学科类别是：</p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_7"
          :text="options_text[7][0]"
          :single="true"
          @change="(val) => ((a_7 = val), (b_7 = c_7 = d_7 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_7"
          :text="options_text[7][1]"
          :single="true"
          @change="(val) => ((b_7 = val), (a_7 = c_7 = d_7 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_7"
          :text="options_text[7][2]"
          :single="true"
          @change="(val) => ((c_7 = val), (b_7 = a_7 = d_7 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_7"
          :text="options_text[7][3]"
          :single="true"
          @change="(val) => ((d_7 = val), (b_7 = c_7 = a_7 = false))"
        />
      </div>
      <!-- Question 8 -->
      <p class="question" id="q8">
        <span>8.</span>（不定项选择）新冠疫情的三年对您的积极影响有哪些？
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_8"
          :text="options_text[8][0]"
          @change="(val) => (a_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_8"
          :text="options_text[8][1]"
          @change="(val) => (b_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_8"
          :text="options_text[8][2]"
          @change="(val) => (c_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_8"
          :text="options_text[8][3]"
          @change="(val) => (d_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_8"
          :text="options_text[8][4]"
          @change="(val) => (e_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="f_8"
          :text="options_text[8][5]"
          @change="(val) => (f_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="g_8"
          :text="options_text[8][6]"
          @change="(val) => (g_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="h_8"
          :text="options_text[8][7]"
          @change="(val) => (h_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="i_8"
          :text="options_text[8][8]"
          @change="(val) => (i_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="j_8"
          :text="options_text[8][9]"
          @change="(val) => (j_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="k_8"
          :text="options_text[8][10]"
          @change="(val) => (k_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="l_8"
          :text="options_text[8][11]"
          @change="(val) => (l_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="m_8"
          :text="options_text[8][12]"
          @change="(val) => (m_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="n_8"
          :text="options_text[8][13]"
          @change="(val) => (n_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="o_8"
          :text="options_text[8][14]"
          @change="(val) => (o_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="p_8"
          :text="options_text[8][15]"
          @change="(val) => (p_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="q_8"
          :text="options_text[8][16]"
          @change="(val) => (q_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="r_8"
          :text="options_text[8][17]"
          @change="(val) => (r_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="s_8"
          :text="options_text[8][18]"
          @change="(val) => (s_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="t_8"
          :text="options_text[8][19]"
          @change="(val) => (t_8 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="u_8"
          :text="options_text[8][20]"
          :input="true"
          :info="v_8"
          @change="(val) => (u_8 = val)"
          @string="(val) => (v_8 = val)"
        />
      </div>
      <!-- Question 9 -->
      <p class="question" id="q9">
        <span>9.</span>（不定项选择）新冠疫情的三年对您的消极影响有哪些？
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_9"
          :text="options_text[9][0]"
          @change="(val) => (a_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_9"
          :text="options_text[9][1]"
          @change="(val) => (b_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_9"
          :text="options_text[9][2]"
          @change="(val) => (c_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_9"
          :text="options_text[9][3]"
          @change="(val) => (d_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_9"
          :text="options_text[9][4]"
          @change="(val) => (e_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="f_9"
          :text="options_text[9][5]"
          @change="(val) => (f_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="g_9"
          :text="options_text[9][6]"
          @change="(val) => (g_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="h_9"
          :text="options_text[9][7]"
          @change="(val) => (h_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="i_9"
          :text="options_text[9][8]"
          @change="(val) => (i_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="j_9"
          :text="options_text[9][9]"
          @change="(val) => (j_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="k_9"
          :text="options_text[9][10]"
          @change="(val) => (k_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="l_9"
          :text="options_text[9][11]"
          @change="(val) => (l_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="m_9"
          :text="options_text[9][12]"
          @change="(val) => (m_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="n_9"
          :text="options_text[9][13]"
          @change="(val) => (n_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="o_9"
          :text="options_text[9][14]"
          @change="(val) => (o_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="p_9"
          :text="options_text[9][15]"
          @change="(val) => (p_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="q_9"
          :text="options_text[9][16]"
          @change="(val) => (q_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="r_9"
          :text="options_text[9][17]"
          @change="(val) => (r_9 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="s_9"
          :text="options_text[9][18]"
          :input="true"
          :info="t_9"
          @change="(val) => (s_9 = val)"
          @string="(val) => (t_9 = val)"
        />
      </div>
      <!-- Question 10 -->
      <p class="question" id="q10">
        <span>10.</span>您对于新冠再次感染的态度是______？
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_10"
          :text="options_text[10][0]"
          :single="true"
          @change="(val) => ((a_10 = val), (b_10 = c_10 = d_10 = e_10 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_10"
          :text="options_text[10][1]"
          :single="true"
          @change="(val) => ((b_10 = val), (a_10 = c_10 = d_10 = e_10 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_10"
          :text="options_text[10][2]"
          :single="true"
          @change="(val) => ((c_10 = val), (b_10 = a_10 = d_10 = e_10 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_10"
          :text="options_text[10][3]"
          :single="true"
          @change="(val) => ((d_10 = val), (b_10 = c_10 = a_10 = e_10 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_10"
          :text="options_text[10][4]"
          :single="true"
          @change="(val) => ((e_10 = val), (b_10 = c_10 = d_10 = a_10 = false))"
        />
      </div>
      <!-- Question 11 -->
      <p class="question" id="q11">
        <span>11.</span>疫情发生以来，您的家庭经济生活水平______?
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_11"
          :text="options_text[11][0]"
          :single="true"
          @change="(val) => ((a_11 = val), (b_11 = c_11 = d_11 = e_11 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_11"
          :text="options_text[11][1]"
          :single="true"
          @change="(val) => ((b_11 = val), (a_11 = c_11 = d_11 = e_11 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_11"
          :text="options_text[11][2]"
          :single="true"
          @change="(val) => ((c_11 = val), (b_11 = a_11 = d_11 = e_11 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_11"
          :text="options_text[11][3]"
          :single="true"
          @change="(val) => ((d_11 = val), (b_11 = c_11 = a_11 = e_11 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_11"
          :text="options_text[11][4]"
          :single="true"
          @change="(val) => ((e_11 = val), (b_11 = c_11 = d_11 = a_11 = false))"
        />
      </div>
      <!-- Question 12 -->
      <p class="question" id="q12">
        <span>12.</span>新冠疫情的三年对您的大学职业生涯规划的影响程度是______?
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_12"
          :text="options_text[12][0]"
          :single="true"
          @change="(val) => ((a_12 = val), (b_12 = c_12 = d_12 = e_12 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_12"
          :text="options_text[12][1]"
          :single="true"
          @change="(val) => ((b_12 = val), (a_12 = c_12 = d_12 = e_12 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_12"
          :text="options_text[12][2]"
          :single="true"
          @change="(val) => ((c_12 = val), (b_12 = a_12 = d_12 = e_12 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_12"
          :text="options_text[12][3]"
          :single="true"
          @change="(val) => ((d_12 = val), (b_12 = c_12 = a_12 = e_12 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_12"
          :text="options_text[12][4]"
          :single="true"
          @change="(val) => ((e_12 = val), (b_12 = c_12 = d_12 = a_12 = false))"
        />
      </div>
      <!-- Question 13 -->
      <p class="question" id="q13">
        <span>13.</span>您对于社会上“毕业即失业”的说法______?
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_13"
          :text="options_text[13][0]"
          :single="true"
          @change="(val) => ((a_13 = val), (b_13 = c_13 = d_13 = e_13 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_13"
          :text="options_text[13][1]"
          :single="true"
          @change="(val) => ((b_13 = val), (a_13 = c_13 = d_13 = e_13 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_13"
          :text="options_text[13][2]"
          :single="true"
          @change="(val) => ((c_13 = val), (b_13 = a_13 = d_13 = e_13 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_13"
          :text="options_text[13][3]"
          :single="true"
          @change="(val) => ((d_13 = val), (b_13 = c_13 = a_13 = e_13 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_13"
          :text="options_text[13][4]"
          :single="true"
          @change="(val) => ((e_13 = val), (b_13 = c_13 = d_13 = a_13 = false))"
        />
      </div>
      <!-- Question 14 -->
      <p class="question" id="q14">
        <span>14.</span>疫情发生以来，您在就业方面的“求稳”心态______?
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_14"
          :text="options_text[14][0]"
          :single="true"
          @change="(val) => ((a_14 = val), (b_14 = c_14 = d_14 = e_14 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_14"
          :text="options_text[14][1]"
          :single="true"
          @change="(val) => ((b_14 = val), (a_14 = c_14 = d_14 = e_14 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_14"
          :text="options_text[14][2]"
          :single="true"
          @change="(val) => ((c_14 = val), (b_14 = a_14 = d_14 = e_14 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_14"
          :text="options_text[14][3]"
          :single="true"
          @change="(val) => ((d_14 = val), (b_14 = c_14 = a_14 = e_14 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_14"
          :text="options_text[14][4]"
          :single="true"
          @change="(val) => ((e_14 = val), (b_14 = c_14 = d_14 = a_14 = false))"
        />
      </div>
      <!-- Question 15 -->
      <p class="question" id="q15">
        <span>15.</span
        >随着出入境管理的放开，您对留学访学、到国际组织实习以及相关政策规定的关注程度是______?
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_15"
          :text="options_text[15][0]"
          :single="true"
          @change="(val) => ((a_15 = val), (b_15 = c_15 = d_15 = e_15 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_15"
          :text="options_text[15][1]"
          :single="true"
          @change="(val) => ((b_15 = val), (a_15 = c_15 = d_15 = e_15 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_15"
          :text="options_text[15][2]"
          :single="true"
          @change="(val) => ((c_15 = val), (b_15 = a_15 = d_15 = e_15 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_15"
          :text="options_text[15][3]"
          :single="true"
          @change="(val) => ((d_15 = val), (b_15 = c_15 = a_15 = e_15 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_15"
          :text="options_text[15][4]"
          :single="true"
          @change="(val) => ((e_15 = val), (b_15 = c_15 = d_15 = a_15 = false))"
        />
      </div>
      <!-- Question 16 -->
      <p class="question" id="q16">
        <span>16.</span>（不定项选择）对于当前国内外热点问题，你对哪些比较关注？
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_16"
          :text="options_text[16][0]"
          @change="(val) => (a_16 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_16"
          :text="options_text[16][1]"
          @change="(val) => (b_16 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_16"
          :text="options_text[16][2]"
          @change="(val) => (c_16 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_16"
          :text="options_text[16][3]"
          @change="(val) => (d_16 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_16"
          :text="options_text[16][4]"
          @change="(val) => (e_16 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="f_16"
          :text="options_text[16][5]"
          @change="(val) => (f_16 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="g_16"
          :text="options_text[16][6]"
          @change="(val) => (g_16 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="h_16"
          :text="options_text[16][7]"
          @change="(val) => (h_16 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="i_16"
          :text="options_text[16][8]"
          @change="(val) => (i_16 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="j_16"
          :text="options_text[16][9]"
          :input="true"
          :info="k_16"
          @change="(val) => (j_16 = val)"
          @string="(val) => (k_16 = val)"
        />
      </div>
      <!-- Question 17 -->
      <p class="question" id="q17">
        <span>17.</span
        >当前疫情平稳进入“乙类乙管”常态化防控阶段后，您觉得与他者的关系如何？（数字越大代表关系越紧密）
      </p>
      <div class="options">
        <div class="slider-line">
          <p>{{ options_text[17][0] }}</p>
          <el-slider
            class="slider"
            v-model="a_17"
            :step="1"
            show-stops
            :max="5"
            :marks="marks"
            :min="1"
          >
          </el-slider>
        </div>
        <div class="slider-line">
          <p>{{ options_text[17][1] }}</p>
          <el-slider
            class="slider"
            v-model="b_17"
            :step="1"
            show-stops
            :max="5"
            :marks="marks"
            :min="1"
          >
          </el-slider>
        </div>
        <div class="slider-line">
          <p>{{ options_text[17][2] }}</p>
          <el-slider
            class="slider"
            v-model="c_17"
            :step="1"
            show-stops
            :max="5"
            :marks="marks"
            :min="1"
          >
          </el-slider>
        </div>
        <div class="slider-line">
          <p>{{ options_text[17][3] }}</p>
          <el-slider
            class="slider"
            v-model="d_17"
            :step="1"
            show-stops
            :max="5"
            :marks="marks"
            :min="1"
          >
          </el-slider>
        </div>
        <div class="slider-line">
          <p>{{ options_text[17][4] }}</p>
          <el-slider
            class="slider"
            v-model="e_17"
            :step="1"
            show-stops
            :max="5"
            :marks="marks"
            :min="1"
          >
          </el-slider>
        </div>
      </div>
      <!-- Question 18 -->
      <p class="question" id="q18">
        <span>18.</span>（不定项选择）新学期返校后，哪些方面可能让您感到压力？
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_18"
          :text="options_text[18][0]"
          @change="(val) => (a_18 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_18"
          :text="options_text[18][1]"
          @change="(val) => (b_18 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_18"
          :text="options_text[18][2]"
          @change="(val) => (c_18 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_18"
          :text="options_text[18][3]"
          @change="(val) => (d_18 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_18"
          :text="options_text[18][4]"
          @change="(val) => (e_18 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="f_18"
          :text="options_text[18][5]"
          @change="(val) => (f_18 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="g_18"
          :text="options_text[18][6]"
          :input="true"
          :info="h_18"
          @change="(val) => (g_18 = val)"
          @string="(val) => (h_18 = val)"
        />
      </div>
      <!-- Question 19 -->
      <p class="question" id="q19">
        <span>19.</span>（不定项选择）日常遇到负面情绪时，您通常如何排解？
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_19"
          :text="options_text[19][0]"
          @change="(val) => (a_19 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_19"
          :text="options_text[19][1]"
          @change="(val) => (b_19 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_19"
          :text="options_text[19][2]"
          @change="(val) => (c_19 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_19"
          :text="options_text[19][3]"
          @change="(val) => (d_19 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_19"
          :text="options_text[19][4]"
          @change="(val) => (e_19 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="f_19"
          :text="options_text[19][5]"
          @change="(val) => (f_19 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="g_19"
          :text="options_text[19][6]"
          @change="(val) => (g_19 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="h_19"
          :text="options_text[19][7]"
          :input="true"
          :info="i_19"
          @change="(val) => (h_19 = val)"
          @string="(val) => (i_19 = val)"
        />
      </div>
      <!-- Question 20 -->
      <p class="question" id="q20">
        <span>20.</span
        >（不定项选择）您日常通过何种渠道反映针对学校相关问题的意见建议？
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_20"
          :text="options_text[20][0]"
          @change="(val) => (a_20 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_20"
          :text="options_text[20][1]"
          @change="(val) => (b_20 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_20"
          :text="options_text[20][2]"
          @change="(val) => (c_20 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_20"
          :text="options_text[20][3]"
          @change="(val) => (d_20 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_20"
          :text="options_text[20][4]"
          @change="(val) => (e_20 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="f_20"
          :text="options_text[20][5]"
          @change="(val) => (f_20 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="g_20"
          :text="options_text[20][6]"
          @change="(val) => (g_20 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="h_20"
          :text="options_text[20][7]"
          :input="true"
          :info="i_20"
          @change="(val) => (h_20 = val)"
          @string="(val) => (i_20 = val)"
        />
      </div>
      <!-- Question 21 -->
      <p class="question" id="q21">
        <span>21.</span>您是否了解学校的资助政策或项目：
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_21"
          :text="options_text[21][0]"
          :single="true"
          @change="(val) => ((a_21 = val), (b_21 = c_21 = d_21 = e_21 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_21"
          :text="options_text[21][1]"
          :single="true"
          @change="(val) => ((b_21 = val), (a_21 = c_21 = d_21 = e_21 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_21"
          :text="options_text[21][2]"
          :single="true"
          @change="(val) => ((c_21 = val), (b_21 = a_21 = d_21 = e_21 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_21"
          :text="options_text[21][3]"
          :single="true"
          @change="(val) => ((d_21 = val), (b_21 = c_21 = a_21 = e_21 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_21"
          :text="options_text[21][4]"
          :single="true"
          @change="(val) => ((e_21 = val), (b_21 = c_21 = d_21 = a_21 = false))"
        />
      </div>
      <!-- Question 22 -->
      <p class="question" id="q22">
        <span>22.</span>您是通过以下哪些途径知晓资助政策的？（可多选）
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_22"
          :text="options_text[22][0]"
          @change="(val) => (a_22 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_22"
          :text="options_text[22][1]"
          @change="(val) => (b_22 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_22"
          :text="options_text[22][2]"
          @change="(val) => (c_22 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_22"
          :text="options_text[22][3]"
          @change="(val) => (d_22 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_22"
          :text="options_text[22][4]"
          @change="(val) => (e_22 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="f_22"
          :text="options_text[22][5]"
          @change="(val) => (f_22 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="g_22"
          :text="options_text[22][6]"
          :input="true"
          :info="h_22"
          @change="(val) => (g_22 = val)"
          @string="(val) => (h_22 = val)"
        />
      </div>
      <!-- Question 23 -->
      <p class="question" id="q23">
        <span>23.</span
        >除了经济资助，您认为学校还需要在哪些方面提供帮助？（可多选，不超过3个）
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_23"
          ref="a_23"
          :text="options_text[23][0]"
          @change="(val) => handleQ23(1, val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_23"
          ref="b_23"
          :text="options_text[23][1]"
          @change="(val) => handleQ23(2, val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_23"
          ref="c_23"
          :text="options_text[23][2]"
          @change="(val) => handleQ23(3, val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_23"
          ref="d_23"
          :text="options_text[23][3]"
          @change="(val) => handleQ23(4, val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_23"
          ref="e_23"
          :text="options_text[23][4]"
          @change="(val) => handleQ23(5, val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="f_23"
          ref="f_23"
          :text="options_text[23][5]"
          @change="(val) => handleQ23(6, val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="g_23"
          ref="g_23"
          :text="options_text[23][6]"
          @change="(val) => handleQ23(7, val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="h_23"
          ref="h_23"
          :text="options_text[23][7]"
          :input="true"
          :info="i_23"
          @change="(val) => handleQ23(8, val)"
          @string="(val) => (i_23 = val)"
        />
      </div>
      <!-- Question 24 -->
      <p class="question" id="q24">
        <span>24.</span>您是在天津大学入党的，或者您正在天津大学申请入党吗？
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_24"
          :text="options_text[24][0]"
          :single="true"
          @change="(val) => ((a_24 = val), (b_24 = c_24 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_24"
          :text="options_text[24][1]"
          :single="true"
          @change="(val) => ((b_24 = val), (a_24 = c_24 = false))"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_24"
          :text="options_text[24][2]"
          :single="true"
          @change="(val) => ((c_24 = val), (b_24 = a_24 = false))"
        />
      </div>
      <p class="question" v-if="!a_24 && (b_24 || c_24)">
        <span></span>您在天津大学申请入党的过程中，遇到的困难主要有？
      </p>
      <div class="options" v-if="!a_24 && (b_24 || c_24)">
        <checkbox
          @calc="calcProgress"
          :value="d_24"
          :text="options_text[24][3]"
          @change="(val) => (d_24 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_24"
          :text="options_text[24][4]"
          @change="(val) => (e_24 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="f_24"
          :text="options_text[24][5]"
          @change="(val) => (f_24 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="g_24"
          :text="options_text[24][6]"
          @change="(val) => (g_24 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="h_24"
          :text="options_text[24][7]"
          @change="(val) => (h_24 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="i_24"
          :text="options_text[24][8]"
          @change="(val) => (i_24 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="j_24"
          :text="options_text[24][9]"
          :input="true"
          :info="k_24"
          @change="(val) => (j_24 = val)"
          @string="(val) => (k_24 = val)"
        />
      </div>
      <!-- Question 25 -->
      <p class="question" id="q25">
        <span>25.</span>（不定项选择）您认为优秀学生党员的标准主要包括______
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_25"
          :text="options_text[25][0]"
          @change="(val) => (a_25 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_25"
          :text="options_text[25][1]"
          @change="(val) => (b_25 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_25"
          :text="options_text[25][2]"
          @change="(val) => (c_25 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_25"
          :text="options_text[25][3]"
          @change="(val) => (d_25 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_25"
          :text="options_text[25][4]"
          @change="(val) => (e_25 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="f_25"
          :text="options_text[25][5]"
          @change="(val) => (f_25 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="g_25"
          :text="options_text[25][6]"
          @change="(val) => (g_25 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="h_25"
          :text="options_text[25][7]"
          :input="true"
          :info="i_25"
          @change="(val) => (h_25 = val)"
          @string="(val) => (i_25 = val)"
        />
      </div>
      <!-- Question 26 -->
      <p class="question" id="q26">
        <span>26.</span
        >（不定项选择）您认为学生党支部发挥战斗堡垒作用的方式主要包括______
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_26"
          :text="options_text[26][0]"
          @change="(val) => (a_26 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_26"
          :text="options_text[26][1]"
          @change="(val) => (b_26 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_26"
          :text="options_text[26][2]"
          @change="(val) => (c_26 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_26"
          :text="options_text[26][3]"
          @change="(val) => (d_26 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_26"
          :text="options_text[26][4]"
          @change="(val) => (e_26 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="f_26"
          :text="options_text[26][5]"
          @change="(val) => (f_26 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="g_26"
          :text="options_text[26][6]"
          :input="true"
          :info="h_26"
          @change="(val) => (g_26 = val)"
          @string="(val) => (h_26 = val)"
        />
      </div>
      <!-- Question 27 -->
      <p class="question" id="q27">
        <span>27.</span>（不定项选择）对于这学期的校园生活，您的期待有哪些？
      </p>
      <div class="options">
        <checkbox
          @calc="calcProgress"
          :value="a_27"
          :text="options_text[27][0]"
          @change="(val) => (a_27 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="b_27"
          :text="options_text[27][1]"
          @change="(val) => (b_27 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="c_27"
          :text="options_text[27][2]"
          @change="(val) => (c_27 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="d_27"
          :text="options_text[27][3]"
          @change="(val) => (d_27 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="e_27"
          :text="options_text[27][4]"
          @change="(val) => (e_27 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="f_27"
          :text="options_text[27][5]"
          @change="(val) => (f_27 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="g_27"
          :text="options_text[27][6]"
          @change="(val) => (g_27 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="h_27"
          :text="options_text[27][7]"
          @change="(val) => (h_27 = val)"
        />
        <checkbox
          @calc="calcProgress"
          :value="i_27"
          :text="options_text[27][8]"
          :input="true"
          :info="j_27"
          @change="(val) => (i_27 = val)"
          @string="(val) => (j_27 = val)"
        />
      </div>
      <el-button
        type="primary"
        round
        class="button"
        :loading="loading"
        @click="submit"
        >提 交</el-button
      >
    </div>
    <el-progress
      :percentage="percentage"
      class="percentage"
      :show-text="false"
    ></el-progress>
  </div>
</template>

<script>
import checkbox from "./components/checkbox.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    checkbox,
  },
  data() {
    return {
      percentage: 0,
      max_val: 3,
      marks: { 0: "1", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" },
      loading: false,
      a_1: false,
      b_1: false,
      a_2: "",
      a_3: false,
      b_3: false,
      c_3: false,
      d_3: false,
      e_3: false,
      f_3: false,
      g_3: false,
      a_4: false,
      b_4: false,
      c_4: false,
      a_5: false,
      b_5: false,
      c_5: false,
      d_5: false,
      e_5: false,
      f_5: false,
      a_6: false,
      b_6: false,
      c_6: false,
      d_6: false,
      e_6: false,
      a_7: false,
      b_7: false,
      c_7: false,
      d_7: false,
      a_8: false,
      b_8: false,
      c_8: false,
      d_8: false,
      e_8: false,
      f_8: false,
      g_8: false,
      h_8: false,
      i_8: false,
      j_8: false,
      k_8: false,
      l_8: false,
      m_8: false,
      n_8: false,
      o_8: false,
      p_8: false,
      q_8: false,
      r_8: false,
      s_8: false,
      t_8: false,
      u_8: false,
      v_8: "",
      a_9: false,
      b_9: false,
      c_9: false,
      d_9: false,
      e_9: false,
      f_9: false,
      g_9: false,
      h_9: false,
      i_9: false,
      j_9: false,
      k_9: false,
      l_9: false,
      m_9: false,
      n_9: false,
      o_9: false,
      p_9: false,
      q_9: false,
      r_9: false,
      s_9: false,
      t_9: "",
      a_10: false,
      b_10: false,
      c_10: false,
      d_10: false,
      e_10: false,
      a_11: false,
      b_11: false,
      c_11: false,
      d_11: false,
      e_11: false,
      a_12: false,
      b_12: false,
      c_12: false,
      d_12: false,
      e_12: false,
      a_13: false,
      b_13: false,
      c_13: false,
      d_13: false,
      e_13: false,
      a_14: false,
      b_14: false,
      c_14: false,
      d_14: false,
      e_14: false,
      a_15: false,
      b_15: false,
      c_15: false,
      d_15: false,
      e_15: false,
      a_16: false,
      b_16: false,
      c_16: false,
      d_16: false,
      e_16: false,
      f_16: false,
      g_16: false,
      h_16: false,
      i_16: false,
      j_16: false,
      k_16: "",
      a_17: 0,
      b_17: 0,
      c_17: 0,
      d_17: 0,
      e_17: 0,
      a_18: false,
      b_18: false,
      c_18: false,
      d_18: false,
      e_18: false,
      f_18: false,
      g_18: false,
      h_18: "",
      a_19: false,
      b_19: false,
      c_19: false,
      d_19: false,
      e_19: false,
      f_19: false,
      g_19: false,
      h_19: false,
      i_19: "",
      a_20: false,
      b_20: false,
      c_20: false,
      d_20: false,
      e_20: false,
      f_20: false,
      g_20: false,
      h_20: false,
      i_20: "",
      a_21: false,
      b_21: false,
      c_21: false,
      d_21: false,
      e_21: false,
      a_22: false,
      b_22: false,
      c_22: false,
      d_22: false,
      e_22: false,
      f_22: false,
      g_22: false,
      h_22: "",
      a_23: false,
      b_23: false,
      c_23: false,
      d_23: false,
      e_23: false,
      f_23: false,
      g_23: false,
      h_23: false,
      i_23: "",
      a_24: false,
      b_24: false,
      c_24: false,
      d_24: false,
      e_24: false,
      f_24: false,
      g_24: false,
      h_24: false,
      i_24: false,
      j_24: false,
      k_24: "",
      a_25: false,
      b_25: false,
      c_25: false,
      d_25: false,
      e_25: false,
      f_25: false,
      g_25: false,
      h_25: false,
      i_25: "",
      a_26: false,
      b_26: false,
      c_26: false,
      d_26: false,
      e_26: false,
      f_26: false,
      g_26: false,
      h_26: "",
      a_27: false,
      b_27: false,
      c_27: false,
      d_27: false,
      e_27: false,
      f_27: false,
      g_27: false,
      h_27: false,
      i_27: false,
      j_27: "",
      options_text: {
        1: ["男", "女"],
        3: [
          "东部地区（北京、天津、河北、上海、江苏、浙江、福建、山东、广东、海南）",
          "中部地区（山西、安徽、江西、河南、湖北、湖南）",
          "西部地区（内蒙古、广西、重庆、四川、贵州、云南、西藏、陕西、甘肃、青海、宁夏、新疆、新疆生产建设兵团）",
          "东北地区（辽宁、吉林、黑龙江）",
          "台湾",
          "香港",
          "澳门",
        ],
        4: ["本科生", "硕士研究生", "博士研究生"],
        5: ["一年级", "二年级", "三年级", "四年级", "五年级", "其他"],
        6: [
          "中共党员（含中共预备党员）",
          "共青团员",
          "民主党派成员",
          "无党派人士",
          "群众",
        ],
        7: ["人文社科类", "理学类", "工学类", "医学类"],
        8: [
          "学会活在当下",
          "性格变得更好",
          "休息时间增加",
          "健康状况更好",
          "更加努力学习",
          "生活习惯改善",
          "感觉更幸运/幸福",
          "生活的勇气增强",
          "对生活更加感激",
          "生活态度更积极",
          "摒弃了坏的习惯",
          "对他人更加关心",
          "锻炼的时间更多",
          "培养了新的爱好",
          "对社会的归属感增强",
          "自我效能感或自信增强",
          "更加注重个人卫生和健康",
          "对医护工作者更加感激",
          "更乐于助人（如志愿工作）",
          "对他人/团体的责备减少",
          "其他",
        ],
        9: [
          "感到疲惫",
          "感到恐慌",
          "回避他人",
          "自信下降",
          "被他人歧视",
          "睡眠变差",
          "情绪困扰增加",
          "健康状况下降",
          "感觉运气不好",
          "社交活动减少",
          "经济状况变差",
          "丢失工作机会",
          "学业受到冲击",
          "生活目标毁灭",
          "不确定感增加",
          "对未来期待减少",
          "认识到生命的脆弱",
          "对他人和团体责备增加",
          "其他",
        ],
        10: ["非常担心", "比较担心", "一般", "不太担心", "完全不担心"],
        11: ["下降非常大", "下降比较大", "一般", "下降比较小", "没影响"],
        12: ["非常大", "比较大", "一般", "比较小", "完全不受影响"],
        13: ["非常担心", "比较担心", "一般", "不太担心", "完全不担心"],
        14: ["非常明显", "比较明显", "一般", "不太明显", "不受影响"],
        15: ["非常关注", "比较关注", "一般", "不太关注", "完全不关注"],
        16: [
          "贯彻落实党的二十大精神",
          "教育、科技、人才“三位一体”布局",
          "新冠病毒感染“乙类乙管”各项措施保障",
          "ChatGPT引起热议",
          "俄乌冲突",
          "土耳其、叙利亚大地震",
          "“新工科”建设",
          "天津经济社会发展“十项行动”",
          "学校十一次党代会",
          "其他",
        ],
        17: ["我和同学/朋友", "我和舍友", "我和老师", "我和家人", "我和学校"],
        18: [
          "课程/研究进展",
          "学习方式",
          "宿舍环境及关系",
          "疫情再次冲击校园",
          "沉迷手机或电脑游戏",
          "就业（面试）机会",
          "其他",
        ],
        19: [
          "压抑自我",
          "和辅导员沟通",
          "寻求心理健康服务（校内或校外）",
          "与室友、同学、家人或朋友诉说",
          "通过网络平台或社交媒体宣泄",
          "通过看书、画画或体育运动排解",
          "通过打游戏、追剧等方式转移注意力",
          "其他",
        ],
        20: [
          "校领导接待日",
          "校领导午餐会",
          "校长信箱",
          "微北洋校务专区",
          "学生会、研究生会权益代表",
          "辅导员、班主任、师友导师、研究生导师等",
          "无渠道",
          "其他",
        ],
        21: ["非常了解", "比较了解", "一般", "不太了解", "完全不了解"],
        22: [
          "学校宣传资料（楼宇宣传海报、学生手册等）",
          "辅导员老师讲解",
          "班级资助专员介绍",
          "网络媒体（网站、公众号等）",
          "招生录取环节（新生资助宣讲、家访等）",
          "亲戚朋友、学长学姐介绍",
          "其他",
        ],
        23: [
          "精神关怀（师长关心等）",
          "就业帮扶（职业生涯规划教育等）",
          "学业指导（课程辅导和学习策略和方法等经验交流）",
          "技能培训（沟通技巧、社交礼仪等综合素养培训）",
          "心理辅导（在遇到心理困惑时，能方便找到疏导渠道）",
          "锻炼机会（多提供一些社会实践、交流访学等机会）",
          "物质资助（如提供日常学习生活必需品等实物）",
          "其他",
        ],
        24: [
          "两者都不是",
          "我是在天津大学发展入党的",
          "我正在天津大学申请入党",
          "不清楚申请入党的流程",
          "不清楚撰写各类材料的规范",
          "入党申请人结业考试难度大",
          "党组织的培养联系较少",
          "学制较短，培养周期紧张",
          "缺乏了解认识党组织的机会",
          "其他",
        ],
        25: [
          "学业表现优异",
          "思想政治理论水平高",
          "积极参与公益志愿服务工作",
          "担任班团组织、社团的骨干",
          "日常生活中与同学沟通联系紧密",
          "在带动同学学业和思想进步上，作出实际贡献",
          "在较为困难局面中常常起到表率作用",
          "其他",
        ],
        26: [
          "帮助广大同学提升思想认识水平",
          "帮助广大同学解决学业困难",
          "组织广大同学开展校园文化活动",
          "围绕同学日常生活开展志愿服务",
          "在参与学校治理上发挥积极作用",
          "严格对支部党员的教育管理",
          "其他",
        ],
        27: [
          "学业/科研有所突破",
          "参加更多校园活动",
          "开始一段恋爱",
          "认识和深度了解天津这座城市",
          "好好规划剩余的大学时光",
          "培养艺术、体育等方面的兴趣爱好",
          "顺其自然",
          "没想好",
          "其他",
        ],
      },
    };
  },
  methods: {
    saveData() {
      window.localStorage.setItem(
        "questionnaireTempData_TJU",
        JSON.stringify(this.$data)
      );
    },
    calcProgress() {
      //TODO 其实还需考虑更多的情况
      let num = 1;
      if (this.a_1 || this.b_1) num++;
      if (this.a_2 !== "") num++;
      if (
        this.a_3 ||
        this.b_3 ||
        this.c_3 ||
        this.d_3 ||
        this.e_3 ||
        this.f_3 ||
        this.g_3
      )
        num++;
      if (this.a_4 || this.b_4 || this.c_4) num++;
      if (this.a_5 || this.b_5 || this.c_5 || this.d_5 || this.e_5 || this.f_5)
        num++;
      if (this.a_6 || this.b_6 || this.c_6 || this.d_6 || this.e_6) num++;
      if (this.a_7 || this.b_7 || this.c_7 || this.d_7) num++;
      if (
        this.a_8 ||
        this.b_8 ||
        this.c_8 ||
        this.d_8 ||
        this.e_8 ||
        this.f_8 ||
        this.g_8 ||
        this.h_8 ||
        this.i_8 ||
        this.j_8 ||
        this.k_8 ||
        this.l_8 ||
        this.m_8 ||
        this.n_8 ||
        this.o_8 ||
        this.p_8 ||
        this.q_8 ||
        this.r_8 ||
        this.s_8 ||
        this.t_8 ||
        this.u_8
      )
        num++;
      if (
        this.a_9 ||
        this.b_9 ||
        this.c_9 ||
        this.d_9 ||
        this.e_9 ||
        this.f_9 ||
        this.g_9 ||
        this.h_9 ||
        this.i_9 ||
        this.j_9 ||
        this.k_9 ||
        this.l_9 ||
        this.m_9 ||
        this.n_9 ||
        this.o_9 ||
        this.p_9 ||
        this.q_9 ||
        this.r_9 ||
        this.s_9
      )
        num++;
      if (this.a_10 || this.b_10 || this.c_10 || this.d_10 || this.e_10) num++;
      if (this.a_11 || this.b_11 || this.c_11 || this.d_11 || this.e_11) num++;
      if (this.a_12 || this.b_12 || this.c_12 || this.d_12 || this.e_12) num++;
      if (this.a_13 || this.b_13 || this.c_13 || this.d_13 || this.e_13) num++;
      if (this.a_14 || this.b_14 || this.c_14 || this.d_14 || this.e_14) num++;
      if (this.a_15 || this.b_15 || this.c_15 || this.d_15 || this.e_15) num++;
      if (
        this.a_16 ||
        this.b_16 ||
        this.c_16 ||
        this.d_16 ||
        this.e_16 ||
        this.f_16 ||
        this.g_16 ||
        this.h_16 ||
        this.i_16 ||
        this.j_16
      )
        num++;
      if (
        this.a_18 ||
        this.b_18 ||
        this.c_18 ||
        this.d_18 ||
        this.e_18 ||
        this.f_18 ||
        this.g_18
      )
        num++;
      if (
        this.a_19 ||
        this.b_19 ||
        this.c_19 ||
        this.d_19 ||
        this.e_19 ||
        this.f_19 ||
        this.g_19 ||
        this.h_19
      )
        num++;
      if (
        this.a_20 ||
        this.b_20 ||
        this.c_20 ||
        this.d_20 ||
        this.e_20 ||
        this.f_20 ||
        this.g_20 ||
        this.h_20
      )
        num++;
      if (this.a_21 || this.b_21 || this.c_21 || this.d_21 || this.e_21) num++;
      if (
        this.a_22 ||
        this.b_22 ||
        this.c_22 ||
        this.d_22 ||
        this.e_22 ||
        this.f_22 ||
        this.g_22
      )
        num++;
      if (
        this.a_23 ||
        this.b_23 ||
        this.c_23 ||
        this.d_23 ||
        this.e_23 ||
        this.f_23 ||
        this.g_23 ||
        this.h_23
      )
        num++;
      if (
        this.a_24 ||
        this.b_24 ||
        this.c_24 ||
        this.d_24 ||
        this.e_24 ||
        this.f_24 ||
        this.g_24 ||
        this.h_24 ||
        this.i_24 ||
        this.j_24
      )
        num++;
      if (
        this.a_25 ||
        this.b_25 ||
        this.c_25 ||
        this.d_25 ||
        this.e_25 ||
        this.f_25 ||
        this.g_25 ||
        this.h_25
      )
        num++;
      if (
        this.a_26 ||
        this.b_26 ||
        this.c_26 ||
        this.d_26 ||
        this.e_26 ||
        this.f_26 ||
        this.g_26
      )
        num++;
      if (
        this.a_27 ||
        this.b_27 ||
        this.c_27 ||
        this.d_27 ||
        this.e_27 ||
        this.f_27 ||
        this.g_27 ||
        this.h_27 ||
        this.i_27
      )
        num++;
      this.percentage = (num / 27) * 100;
    },
    handleQ23(i, val) {
      let cnt = 0;
      if (this.a_23) cnt++;
      if (this.b_23) cnt++;
      if (this.c_23) cnt++;
      if (this.d_23) cnt++;
      if (this.e_23) cnt++;
      if (this.f_23) cnt++;
      if (this.g_23) cnt++;
      if (this.h_23) cnt++;
      if (val && cnt > 2) {
        val = false;
        this.$notify.warning({
          title: "注意",
          message: "最多选择三项哦~",
          showClose: false,
        });
      }
      switch (i) {
        case 1:
          this.a_23 = val;
          this.$refs.a_23.setTemp(val);
          break;
        case 2:
          this.b_23 = val;
          this.$refs.b_23.setTemp(val);
          break;
        case 3:
          this.c_23 = val;
          this.$refs.c_23.setTemp(val);
          break;
        case 4:
          this.d_23 = val;
          this.$refs.d_23.setTemp(val);
          break;
        case 5:
          this.e_23 = val;
          this.$refs.e_23.setTemp(val);
          break;
        case 6:
          this.f_23 = val;
          this.$refs.f_23.setTemp(val);
          break;
        case 7:
          this.g_23 = val;
          this.$refs.g_23.setTemp(val);
          break;
        case 8:
          this.h_23 = val;
          this.$refs.h_23.setTemp(val);
          break;
        default:
          break;
      }
    },
    scrollAndNotify(val) {
      setTimeout(() => {
        document.querySelector("#q" + val).scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
      this.$notify.warning({
        title: "请注意",
        message: "您还有第" + val + "题没有回答哦~",
        showClose: false,
      });
      return;
    },
    submit() {
      let form = { opt: "" };
      if (this.a_1) {
        form.ques1 = this.options_text[1][0];
        form.opt += ",";
      } else if (this.b_1) {
        form.ques1 = this.options_text[1][1];
        form.opt += ",";
      } else {
        this.scrollAndNotify(1);
        return;
      }
      if (this.a_2 !== "") {
        form.ques2 = this.a_2;
        form.opt += ",";
      } else {
        this.scrollAndNotify(2);
        return;
      }
      if (this.a_3) {
        form.ques3 = this.options_text[3][0];
        form.opt += "A,";
      } else if (this.b_3) {
        form.ques3 = this.options_text[3][1];
        form.opt += "B,";
      } else if (this.c_3) {
        form.ques3 = this.options_text[3][2];
        form.opt += "C,";
      } else if (this.d_3) {
        form.ques3 = this.options_text[3][3];
        form.opt += "D,";
      } else if (this.e_3) {
        form.ques3 = this.options_text[3][4];
        form.opt += "E,";
      } else if (this.f_3) {
        form.ques3 = this.options_text[3][5];
        form.opt += "F,";
      } else if (this.g_3) {
        form.ques3 = this.options_text[3][6];
        form.opt += "G,";
      } else {
        this.scrollAndNotify(3);
        return;
      }
      if (this.a_4) {
        form.ques4 = this.options_text[4][0];
        form.opt += "A,";
      } else if (this.b_4) {
        form.ques4 = this.options_text[4][1];
        form.opt += "B,";
      } else if (this.c_4) {
        form.ques4 = this.options_text[4][2];
        form.opt += "C,";
      } else {
        this.scrollAndNotify(4);
        return;
      }
      if (this.a_5) {
        form.ques5 = this.options_text[5][0];
        form.opt += "A,";
      } else if (this.b_5) {
        form.ques5 = this.options_text[5][1];
        form.opt += "B,";
      } else if (this.c_5) {
        form.ques5 = this.options_text[5][2];
        form.opt += "C,";
      } else if (this.d_5 && !this.b_4) {
        form.ques5 = this.options_text[5][3];
        form.opt += "D,";
      } else if (this.e_5 && !this.b_4 && !this.c_4) {
        form.ques5 = this.options_text[5][4];
        form.opt += "E,";
      } else {
        this.scrollAndNotify(5);
        return;
      }
      if (this.a_6) {
        form.ques6 = this.options_text[6][0];
        form.opt += "A,";
      } else if (this.b_6) {
        form.ques6 = this.options_text[6][1];
        form.opt += "B,";
      } else if (this.c_6) {
        form.ques6 = this.options_text[6][2];
        form.opt += "C,";
      } else if (this.d_6) {
        form.ques6 = this.options_text[6][3];
        form.opt += "D,";
      } else if (this.e_6) {
        form.ques6 = this.options_text[6][4];
        form.opt += "E,";
      } else {
        this.scrollAndNotify(6);
        return;
      }
      if (this.a_7) {
        form.ques7 = this.options_text[7][0];
        form.opt += "A,";
      } else if (this.b_7) {
        form.ques7 = this.options_text[7][1];
        form.opt += "B,";
      } else if (this.c_7) {
        form.ques7 = this.options_text[7][2];
        form.opt += "C,";
      } else if (this.d_7) {
        form.ques7 = this.options_text[7][3];
        form.opt += "D,";
      } else {
        this.scrollAndNotify(7);
        return;
      }
      let temp = true;
      form.ques8 = "";
      if (this.a_8) {
        if (temp) form.ques8 += this.options_text[8][1];
        else form.ques8 += "|" + this.options_text[8][1];
        form.opt += "A";
        temp = false;
      }
      if (this.b_8) {
        if (temp) form.ques8 += this.options_text[8][2];
        else form.ques8 += "|" + this.options_text[8][2];
        form.opt += "B";
        temp = false;
      }
      if (this.c_8) {
        if (temp) form.ques8 += this.options_text[8][3];
        else form.ques8 += "|" + this.options_text[8][3];
        form.opt += "C";
        temp = false;
      }
      if (this.d_8) {
        if (temp) form.ques8 += this.options_text[8][3];
        else form.ques8 += "|" + this.options_text[8][3];
        form.opt += "D";
        temp = false;
      }
      if (this.e_8) {
        if (temp) form.ques8 += this.options_text[8][4];
        else form.ques8 += "|" + this.options_text[8][4];
        form.opt += "E";
        temp = false;
      }
      if (this.f_8) {
        if (temp) form.ques8 += this.options_text[8][5];
        else form.ques8 += "|" + this.options_text[8][5];
        form.opt += "F";
        temp = false;
      }
      if (this.g_8) {
        if (temp) form.ques8 += this.options_text[8][6];
        else form.ques8 += "|" + this.options_text[8][6];
        form.opt += "G";
        temp = false;
      }
      if (this.h_8) {
        if (temp) form.ques8 += this.options_text[8][7];
        else form.ques8 += "|" + this.options_text[8][7];
        form.opt += "H";
        temp = false;
      }
      if (this.i_8) {
        if (temp) form.ques8 += this.options_text[8][8];
        else form.ques8 += "|" + this.options_text[8][8];
        form.opt += "I";
        temp = false;
      }
      if (this.j_8) {
        if (temp) form.ques8 += this.options_text[8][9];
        else form.ques8 += "|" + this.options_text[8][9];
        form.opt += "J";
        temp = false;
      }
      if (this.k_8) {
        if (temp) form.ques8 += this.options_text[8][10];
        else form.ques8 += "|" + this.options_text[8][10];
        form.opt += "K";
        temp = false;
      }
      if (this.l_8) {
        if (temp) form.ques8 += this.options_text[8][11];
        else form.ques8 += "|" + this.options_text[8][11];
        form.opt += "L";
        temp = false;
      }
      if (this.m_8) {
        if (temp) form.ques8 += this.options_text[8][12];
        else form.ques8 += "|" + this.options_text[8][12];
        form.opt += "M";
        temp = false;
      }
      if (this.n_8) {
        if (temp) form.ques8 += this.options_text[8][13];
        else form.ques8 += "|" + this.options_text[8][13];
        form.opt += "N";
        temp = false;
      }
      if (this.o_8) {
        if (temp) form.ques8 += this.options_text[8][14];
        else form.ques8 += "|" + this.options_text[8][14];
        form.opt += "O";
        temp = false;
      }
      if (this.p_8) {
        if (temp) form.ques8 += this.options_text[8][15];
        else form.ques8 += "|" + this.options_text[8][15];
        form.opt += "P";
        temp = false;
      }
      if (this.q_8) {
        if (temp) form.ques8 += this.options_text[8][16];
        else form.ques8 += "|" + this.options_text[8][16];
        form.opt += "Q";
        temp = false;
      }
      if (this.r_8) {
        if (temp) form.ques8 += this.options_text[8][17];
        else form.ques8 += "|" + this.options_text[8][17];
        form.opt += "R";
        temp = false;
      }
      if (this.s_8) {
        if (temp) form.ques8 += this.options_text[8][18];
        else form.ques8 += "|" + this.options_text[8][18];
        form.opt += "S";
        temp = false;
      }
      if (this.t_8) {
        if (temp) form.ques8 += this.options_text[8][19];
        else form.ques8 += "|" + this.options_text[8][19];
        form.opt += "T";
        temp = false;
      }
      if (this.u_8) {
        if (temp)
          form.ques8 +=
            this.options_text[8][20] + (this.v_8 ? "，" + this.v_8 : "");
        else
          form.ques8 +=
            "|" +
            (this.options_text[8][20] + (this.v_8 ? "，" + this.v_8 : ""));
        form.opt += "U";
        temp = false;
      }
      if (temp) {
        this.scrollAndNotify(8);
        return;
      } else {
        form.opt += ",";
      }
      temp = true;
      form.ques9 = "";
      if (this.a_9) {
        if (temp) form.ques9 += this.options_text[9][1];
        else form.ques9 += "|" + this.options_text[9][1];
        form.opt += "A";
        temp = false;
      }
      if (this.b_9) {
        if (temp) form.ques9 += this.options_text[9][2];
        else form.ques9 += "|" + this.options_text[9][2];
        form.opt += "B";
        temp = false;
      }
      if (this.c_9) {
        if (temp) form.ques9 += this.options_text[9][3];
        else form.ques9 += "|" + this.options_text[9][3];
        form.opt += "C";
        temp = false;
      }
      if (this.d_9) {
        if (temp) form.ques9 += this.options_text[9][3];
        else form.ques9 += "|" + this.options_text[9][3];
        form.opt += "D";
        temp = false;
      }
      if (this.e_9) {
        if (temp) form.ques9 += this.options_text[9][4];
        else form.ques9 += "|" + this.options_text[9][4];
        form.opt += "E";
        temp = false;
      }
      if (this.f_9) {
        if (temp) form.ques9 += this.options_text[9][5];
        else form.ques9 += "|" + this.options_text[9][5];
        form.opt += "F";
        temp = false;
      }
      if (this.g_9) {
        if (temp) form.ques9 += this.options_text[9][6];
        else form.ques9 += "|" + this.options_text[9][6];
        form.opt += "G";
        temp = false;
      }
      if (this.h_9) {
        if (temp) form.ques9 += this.options_text[9][7];
        else form.ques9 += "|" + this.options_text[9][7];
        form.opt += "H";
        temp = false;
      }
      if (this.i_9) {
        if (temp) form.ques9 += this.options_text[9][8];
        else form.ques9 += "|" + this.options_text[9][8];
        form.opt += "I";
        temp = false;
      }
      if (this.j_9) {
        if (temp) form.ques9 += this.options_text[9][9];
        else form.ques9 += "|" + this.options_text[9][9];
        form.opt += "J";
        temp = false;
      }
      if (this.k_9) {
        if (temp) form.ques9 += this.options_text[9][10];
        else form.ques9 += "|" + this.options_text[9][10];
        form.opt += "K";
        temp = false;
      }
      if (this.l_9) {
        if (temp) form.ques9 += this.options_text[9][11];
        else form.ques9 += "|" + this.options_text[9][11];
        form.opt += "L";
        temp = false;
      }
      if (this.m_9) {
        if (temp) form.ques9 += this.options_text[9][12];
        else form.ques9 += "|" + this.options_text[9][12];
        form.opt += "M";
        temp = false;
      }
      if (this.n_9) {
        if (temp) form.ques9 += this.options_text[9][13];
        else form.ques9 += "|" + this.options_text[9][13];
        form.opt += "N";
        temp = false;
      }
      if (this.o_9) {
        if (temp) form.ques9 += this.options_text[9][14];
        else form.ques9 += "|" + this.options_text[9][14];
        form.opt += "O";
        temp = false;
      }
      if (this.p_9) {
        if (temp) form.ques9 += this.options_text[9][15];
        else form.ques9 += "|" + this.options_text[9][15];
        form.opt += "P";
        temp = false;
      }
      if (this.q_9) {
        if (temp) form.ques9 += this.options_text[9][16];
        else form.ques9 += "|" + this.options_text[9][16];
        form.opt += "Q";
        temp = false;
      }
      if (this.r_9) {
        if (temp) form.ques9 += this.options_text[9][17];
        else form.ques9 += "|" + this.options_text[9][17];
        form.opt += "R";
        temp = false;
      }
      if (this.s_9) {
        if (temp)
          form.ques9 +=
            this.options_text[9][18] + (this.t_9 ? "，" + this.t_9 : "");
        else
          form.ques9 +=
            "|" +
            (this.options_text[9][18] + (this.t_9 ? "，" + this.t_9 : ""));
        form.opt += "U";
        temp = false;
      }
      if (temp) {
        this.scrollAndNotify(9);
        return;
      } else {
        form.opt += ",";
      }
      if (this.a_10) {
        form.ques10 = this.options_text[10][0];
        form.opt += "A,";
      } else if (this.b_10) {
        form.ques10 = this.options_text[10][1];
        form.opt += "B,";
      } else if (this.c_10) {
        form.ques10 = this.options_text[10][2];
        form.opt += "C,";
      } else if (this.d_10) {
        form.ques10 = this.options_text[10][3];
        form.opt += "D,";
      } else if (this.e_10) {
        form.ques10 = this.options_text[10][4];
        form.opt += "E,";
      } else {
        this.scrollAndNotify(10);
        return;
      }
      if (this.a_11) {
        form.ques11 = this.options_text[11][0];
        form.opt += "A,";
      } else if (this.b_11) {
        form.ques11 = this.options_text[11][1];
        form.opt += "B,";
      } else if (this.c_11) {
        form.ques11 = this.options_text[11][2];
        form.opt += "C,";
      } else if (this.d_11) {
        form.ques11 = this.options_text[11][3];
        form.opt += "D,";
      } else if (this.e_11) {
        form.ques11 = this.options_text[11][4];
        form.opt += "E,";
      } else {
        this.scrollAndNotify(11);
        return;
      }
      if (this.a_12) {
        form.ques12 = this.options_text[12][0];
        form.opt += "A,";
      } else if (this.b_12) {
        form.ques12 = this.options_text[12][1];
        form.opt += "B,";
      } else if (this.c_12) {
        form.ques12 = this.options_text[12][2];
        form.opt += "C,";
      } else if (this.d_12) {
        form.ques12 = this.options_text[12][3];
        form.opt += "D,";
      } else if (this.e_12) {
        form.ques12 = this.options_text[12][4];
        form.opt += "E,";
      } else {
        this.scrollAndNotify(12);
        return;
      }
      if (this.a_13) {
        form.ques13 = this.options_text[13][0];
        form.opt += "A,";
      } else if (this.b_13) {
        form.ques13 = this.options_text[13][1];
        form.opt += "B,";
      } else if (this.c_13) {
        form.ques13 = this.options_text[13][2];
        form.opt += "C,";
      } else if (this.d_13) {
        form.ques13 = this.options_text[13][3];
        form.opt += "D,";
      } else if (this.e_13) {
        form.ques13 = this.options_text[13][4];
        form.opt += "E,";
      } else {
        this.scrollAndNotify(13);
        return;
      }
      if (this.a_14) {
        form.ques14 = this.options_text[14][0];
        form.opt += "A,";
      } else if (this.b_14) {
        form.ques14 = this.options_text[14][1];
        form.opt += "B,";
      } else if (this.c_14) {
        form.ques14 = this.options_text[14][2];
        form.opt += "C,";
      } else if (this.d_14) {
        form.ques14 = this.options_text[14][3];
        form.opt += "D,";
      } else if (this.e_14) {
        form.ques14 = this.options_text[14][4];
        form.opt += "E,";
      } else {
        this.scrollAndNotify(14);
        return;
      }
      if (this.a_15) {
        form.ques15 = this.options_text[15][0];
        form.opt += "A,";
      } else if (this.b_15) {
        form.ques15 = this.options_text[15][1];
        form.opt += "B,";
      } else if (this.c_15) {
        form.ques15 = this.options_text[15][2];
        form.opt += "C,";
      } else if (this.d_15) {
        form.ques15 = this.options_text[15][3];
        form.opt += "D,";
      } else if (this.e_15) {
        form.ques15 = this.options_text[15][4];
        form.opt += "E,";
      } else {
        this.scrollAndNotify(15);
        return;
      }
      temp = true;
      form.ques16 = "";
      if (this.a_16) {
        if (temp) form.ques16 += this.options_text[16][1];
        else form.ques16 += "|" + this.options_text[16][1];
        form.opt += "A";
        temp = false;
      }
      if (this.b_16) {
        if (temp) form.ques16 += this.options_text[16][2];
        else form.ques16 += "|" + this.options_text[16][2];
        form.opt += "B";
        temp = false;
      }
      if (this.c_16) {
        if (temp) form.ques16 += this.options_text[16][3];
        else form.ques16 += "|" + this.options_text[16][3];
        form.opt += "C";
        temp = false;
      }
      if (this.d_16) {
        if (temp) form.ques16 += this.options_text[16][3];
        else form.ques16 += "|" + this.options_text[16][3];
        form.opt += "D";
        temp = false;
      }
      if (this.e_16) {
        if (temp) form.ques16 += this.options_text[16][4];
        else form.ques16 += "|" + this.options_text[16][4];
        form.opt += "E";
        temp = false;
      }
      if (this.f_16) {
        if (temp) form.ques16 += this.options_text[16][5];
        else form.ques16 += "|" + this.options_text[16][5];
        form.opt += "F";
        temp = false;
      }
      if (this.g_16) {
        if (temp) form.ques16 += this.options_text[16][6];
        else form.ques16 += "|" + this.options_text[16][6];
        form.opt += "G";
        temp = false;
      }
      if (this.h_16) {
        if (temp) form.ques16 += this.options_text[16][7];
        else form.ques16 += "|" + this.options_text[16][7];
        form.opt += "H";
        temp = false;
      }
      if (this.i_16) {
        if (temp) form.ques16 += this.options_text[16][8];
        else form.ques16 += "|" + this.options_text[16][8];
        form.opt += "I";
        temp = false;
      }
      if (this.j_16) {
        if (temp)
          form.ques16 +=
            this.options_text[16][9] + (this.k_16 ? "，" + this.k_16 : "");
        else
          form.ques16 +=
            "|" +
            (this.options_text[16][9] + (this.k_16 ? "，" + this.k_16 : ""));
        form.opt += "J";
        temp = false;
      }
      if (temp) {
        this.scrollAndNotify(16);
        return;
      } else {
        form.opt += ",";
      }
      form.ques17 =
        "" + this.a_17 + this.b_17 + this.c_17 + this.d_17 + this.e_17;
      form.opt += ",";
      temp = true;
      form.ques18 = "";
      if (this.a_18) {
        if (temp) form.ques18 += this.options_text[18][1];
        else form.ques18 += "|" + this.options_text[18][1];
        form.opt += "A";
        temp = false;
      }
      if (this.b_18) {
        if (temp) form.ques18 += this.options_text[18][2];
        else form.ques18 += "|" + this.options_text[18][2];
        form.opt += "B";
        temp = false;
      }
      if (this.c_18) {
        if (temp) form.ques18 += this.options_text[18][3];
        else form.ques18 += "|" + this.options_text[18][3];
        form.opt += "C";
        temp = false;
      }
      if (this.d_18) {
        if (temp) form.ques18 += this.options_text[18][3];
        else form.ques18 += "|" + this.options_text[18][3];
        form.opt += "D";
        temp = false;
      }
      if (this.e_18) {
        if (temp) form.ques18 += this.options_text[18][4];
        else form.ques18 += "|" + this.options_text[18][4];
        form.opt += "E";
        temp = false;
      }
      if (this.f_18) {
        if (temp) form.ques18 += this.options_text[18][5];
        else form.ques18 += "|" + this.options_text[18][5];
        form.opt += "F";
        temp = false;
      }
      if (this.g_18) {
        if (temp)
          form.ques18 +=
            this.options_text[18][6] + (this.h_18 ? "，" + this.h_18 : "");
        else
          form.ques18 +=
            "|" +
            (this.options_text[18][6] + (this.h_18 ? "，" + this.h_18 : ""));
        form.opt += "G";
        temp = false;
      }
      if (temp) {
        this.scrollAndNotify(18);
        return;
      } else {
        form.opt += ",";
      }
      temp = true;
      form.ques19 = "";
      if (this.a_19) {
        if (temp) form.ques19 += this.options_text[19][1];
        else form.ques19 += "|" + this.options_text[19][1];
        form.opt += "A";
        temp = false;
      }
      if (this.b_19) {
        if (temp) form.ques19 += this.options_text[19][2];
        else form.ques19 += "|" + this.options_text[19][2];
        form.opt += "B";
        temp = false;
      }
      if (this.c_19) {
        if (temp) form.ques19 += this.options_text[19][3];
        else form.ques19 += "|" + this.options_text[19][3];
        form.opt += "C";
        temp = false;
      }
      if (this.d_19) {
        if (temp) form.ques19 += this.options_text[19][3];
        else form.ques19 += "|" + this.options_text[19][3];
        form.opt += "D";
        temp = false;
      }
      if (this.e_19) {
        if (temp) form.ques19 += this.options_text[19][4];
        else form.ques19 += "|" + this.options_text[19][4];
        form.opt += "E";
        temp = false;
      }
      if (this.f_19) {
        if (temp) form.ques19 += this.options_text[19][5];
        else form.ques19 += "|" + this.options_text[19][5];
        form.opt += "F";
        temp = false;
      }
      if (this.g_19) {
        if (temp) form.ques19 += this.options_text[19][6];
        else form.ques19 += "|" + this.options_text[19][6];
        form.opt += "G";
        temp = false;
      }
      if (this.h_19) {
        if (temp)
          form.ques19 +=
            this.options_text[19][7] + (this.i_19 ? "，" + this.i_19 : "");
        else
          form.ques19 +=
            "|" +
            (this.options_text[19][7] + (this.i_19 ? "，" + this.i_19 : ""));
        form.opt += "H";
        temp = false;
      }
      if (temp) {
        this.scrollAndNotify(19);
        return;
      } else {
        form.opt += ",";
      }
      temp = true;
      form.ques20 = "";
      if (this.a_20) {
        if (temp) form.ques20 += this.options_text[20][1];
        else form.ques20 += "|" + this.options_text[20][1];
        form.opt += "A";
        temp = false;
      }
      if (this.b_20) {
        if (temp) form.ques20 += this.options_text[20][2];
        else form.ques20 += "|" + this.options_text[20][2];
        form.opt += "B";
        temp = false;
      }
      if (this.c_20) {
        if (temp) form.ques20 += this.options_text[20][3];
        else form.ques20 += "|" + this.options_text[20][3];
        form.opt += "C";
        temp = false;
      }
      if (this.d_20) {
        if (temp) form.ques20 += this.options_text[20][3];
        else form.ques20 += "|" + this.options_text[20][3];
        form.opt += "D";
        temp = false;
      }
      if (this.e_20) {
        if (temp) form.ques20 += this.options_text[20][4];
        else form.ques20 += "|" + this.options_text[20][4];
        form.opt += "E";
        temp = false;
      }
      if (this.f_20) {
        if (temp) form.ques20 += this.options_text[20][5];
        else form.ques20 += "|" + this.options_text[20][5];
        form.opt += "F";
        temp = false;
      }
      if (this.g_20) {
        if (temp) form.ques20 += this.options_text[20][6];
        else form.ques20 += "|" + this.options_text[20][6];
        form.opt += "G";
        temp = false;
      }
      if (this.h_20) {
        if (temp)
          form.ques20 +=
            this.options_text[20][7] + (this.i_20 ? "，" + this.i_20 : "");
        else
          form.ques20 +=
            "|" +
            (this.options_text[20][7] + (this.i_20 ? "，" + this.i_20 : ""));
        form.opt += "H";
        temp = false;
      }
      if (temp) {
        this.scrollAndNotify(20);
        return;
      } else {
        form.opt += ",";
      }
      if (this.a_21) {
        form.ques21 = this.options_text[21][0];
        form.opt += "A,";
      } else if (this.b_21) {
        form.ques21 = this.options_text[21][1];
        form.opt += "B,";
      } else if (this.c_21) {
        form.ques21 = this.options_text[21][2];
        form.opt += "C,";
      } else if (this.d_21) {
        form.ques21 = this.options_text[21][3];
        form.opt += "D,";
      } else if (this.e_21) {
        form.ques21 = this.options_text[21][4];
        form.opt += "E,";
      } else {
        this.scrollAndNotify(21);
        return;
      }
      temp = true;
      form.ques22 = "";
      if (this.a_22) {
        if (temp) form.ques22 += this.options_text[22][1];
        else form.ques22 += "|" + this.options_text[22][1];
        form.opt += "A";
        temp = false;
      }
      if (this.b_22) {
        if (temp) form.ques22 += this.options_text[22][2];
        else form.ques22 += "|" + this.options_text[22][2];
        form.opt += "B";
        temp = false;
      }
      if (this.c_22) {
        if (temp) form.ques22 += this.options_text[22][3];
        else form.ques22 += "|" + this.options_text[22][3];
        form.opt += "C";
        temp = false;
      }
      if (this.d_22) {
        if (temp) form.ques22 += this.options_text[22][3];
        else form.ques22 += "|" + this.options_text[22][3];
        form.opt += "D";
        temp = false;
      }
      if (this.e_22) {
        if (temp) form.ques22 += this.options_text[22][4];
        else form.ques22 += "|" + this.options_text[22][4];
        form.opt += "E";
        temp = false;
      }
      if (this.f_22) {
        if (temp) form.ques22 += this.options_text[22][5];
        else form.ques22 += "|" + this.options_text[22][5];
        form.opt += "F";
        temp = false;
      }
      if (this.g_22) {
        if (temp)
          form.ques22 +=
            this.options_text[22][6] + (this.h_22 ? "，" + this.h_22 : "");
        else
          form.ques22 +=
            "|" +
            (this.options_text[22][6] + (this.h_22 ? "，" + this.h_22 : ""));
        form.opt += "G";
        temp = false;
      }
      if (temp) {
        this.scrollAndNotify(22);
        return;
      } else {
        form.opt += ",";
      }
      temp = true;
      form.ques23 = "";
      if (this.a_23) {
        if (temp) form.ques23 += this.options_text[23][1];
        else form.ques23 += "|" + this.options_text[23][1];
        form.opt += "A";
        temp = false;
      }
      if (this.b_23) {
        if (temp) form.ques23 += this.options_text[23][2];
        else form.ques23 += "|" + this.options_text[23][2];
        form.opt += "B";
        temp = false;
      }
      if (this.c_23) {
        if (temp) form.ques23 += this.options_text[23][3];
        else form.ques23 += "|" + this.options_text[23][3];
        form.opt += "C";
        temp = false;
      }
      if (this.d_23) {
        if (temp) form.ques23 += this.options_text[23][3];
        else form.ques23 += "|" + this.options_text[23][3];
        form.opt += "D";
        temp = false;
      }
      if (this.e_23) {
        if (temp) form.ques23 += this.options_text[23][4];
        else form.ques23 += "|" + this.options_text[23][4];
        form.opt += "E";
        temp = false;
      }
      if (this.f_23) {
        if (temp) form.ques23 += this.options_text[23][5];
        else form.ques23 += "|" + this.options_text[23][5];
        form.opt += "F";
        temp = false;
      }
      if (this.g_23) {
        if (temp) form.ques23 += this.options_text[23][6];
        else form.ques23 += "|" + this.options_text[23][6];
        form.opt += "G";
        temp = false;
      }
      if (this.h_23) {
        if (temp)
          form.ques23 +=
            this.options_text[23][7] + (this.i_23 ? "，" + this.i_23 : "");
        else
          form.ques23 +=
            "|" +
            (this.options_text[23][7] + (this.i_23 ? "，" + this.i_23 : ""));
        form.opt += "H";
        temp = false;
      }
      if (temp) {
        this.scrollAndNotify(23);
        return;
      } else {
        form.opt += ",";
      }
      if (this.a_24) {
        form.ques24 = this.options_text[24][0];
        form.opt += "A,";
      } else {
        if (this.b_24) {
          form.ques24 = this.options_text[24][1];
          form.opt += "B";
        } else if (this.c_24) {
          form.ques24 = this.options_text[24][2];
          form.opt += "C";
        } else {
          this.scrollAndNotify(24);
          return;
        }
        let subTemp = true;
        if (this.d_24) {
          form.ques24 += "|" + this.options_text[24][3];
          form.opt += "A";
          subTemp = false;
        }
        if (this.e_24) {
          form.ques24 += "|" + this.options_text[24][4];
          form.opt += "B";
          subTemp = false;
        }
        if (this.f_24) {
          form.ques24 += "|" + this.options_text[24][5];
          form.opt += "C";
          subTemp = false;
        }
        if (this.g_24) {
          form.ques24 += "|" + this.options_text[24][6];
          form.opt += "D";
          subTemp = false;
        }
        if (this.h_24) {
          form.ques24 += "|" + this.options_text[24][7];
          form.opt += "E";
          subTemp = false;
        }
        if (this.i_24) {
          form.ques24 += "|" + this.options_text[24][8];
          form.opt += "F";
          subTemp = false;
        }
        if (this.j_24) {
          form.ques24 +=
            "|" +
            (this.options_text[24][9] + (this.k_24 ? "，" + this.k_24 : ""));
          form.opt += "G";
          subTemp = false;
        }
        if (subTemp) {
          this.scrollAndNotify(24);
          return;
        } else {
          form.opt += ",";
        }
      }
      temp = true;
      form.ques25 = "";
      if (this.a_25) {
        if (temp) form.ques25 += this.options_text[25][1];
        else form.ques25 += "|" + this.options_text[25][1];
        form.opt += "A";
        temp = false;
      }
      if (this.b_25) {
        if (temp) form.ques25 += this.options_text[25][2];
        else form.ques25 += "|" + this.options_text[25][2];
        form.opt += "B";
        temp = false;
      }
      if (this.c_25) {
        if (temp) form.ques25 += this.options_text[25][3];
        else form.ques25 += "|" + this.options_text[25][3];
        form.opt += "C";
        temp = false;
      }
      if (this.d_25) {
        if (temp) form.ques25 += this.options_text[25][3];
        else form.ques25 += "|" + this.options_text[25][3];
        form.opt += "D";
        temp = false;
      }
      if (this.e_25) {
        if (temp) form.ques25 += this.options_text[25][4];
        else form.ques25 += "|" + this.options_text[25][4];
        form.opt += "E";
        temp = false;
      }
      if (this.f_25) {
        if (temp) form.ques25 += this.options_text[25][5];
        else form.ques25 += "|" + this.options_text[25][5];
        form.opt += "F";
        temp = false;
      }
      if (this.g_25) {
        if (temp) form.ques25 += this.options_text[25][6];
        else form.ques25 += "|" + this.options_text[25][6];
        form.opt += "G";
        temp = false;
      }
      if (this.h_25) {
        if (temp)
          form.ques25 +=
            this.options_text[25][7] + (this.i_25 ? "，" + this.i_25 : "");
        else
          form.ques25 +=
            "|" +
            (this.options_text[25][7] + (this.i_25 ? "，" + this.i_25 : ""));
        form.opt += "H";
        temp = false;
      }
      if (temp) {
        this.scrollAndNotify(25);
        return;
      } else {
        form.opt += ",";
      }
      temp = true;
      form.ques26 = "";
      if (this.a_26) {
        if (temp) form.ques26 += this.options_text[26][1];
        else form.ques26 += "|" + this.options_text[26][1];
        form.opt += "A";
        temp = false;
      }
      if (this.b_26) {
        if (temp) form.ques26 += this.options_text[26][2];
        else form.ques26 += "|" + this.options_text[26][2];
        form.opt += "B";
        temp = false;
      }
      if (this.c_26) {
        if (temp) form.ques26 += this.options_text[26][3];
        else form.ques26 += "|" + this.options_text[26][3];
        form.opt += "C";
        temp = false;
      }
      if (this.d_26) {
        if (temp) form.ques26 += this.options_text[26][3];
        else form.ques26 += "|" + this.options_text[26][3];
        form.opt += "D";
        temp = false;
      }
      if (this.e_26) {
        if (temp) form.ques26 += this.options_text[26][4];
        else form.ques26 += "|" + this.options_text[26][4];
        form.opt += "E";
        temp = false;
      }
      if (this.f_26) {
        if (temp) form.ques26 += this.options_text[26][5];
        else form.ques26 += "|" + this.options_text[26][5];
        form.opt += "F";
        temp = false;
      }
      if (this.g_26) {
        if (temp)
          form.ques26 +=
            this.options_text[26][6] + (this.h_26 ? "，" + this.h_26 : "");
        else
          form.ques26 +=
            "|" +
            (this.options_text[26][6] + (this.h_26 ? "，" + this.h_26 : ""));
        form.opt += "G";
        temp = false;
      }
      if (temp) {
        this.scrollAndNotify(26);
        return;
      } else {
        form.opt += ",";
      }
      temp = true;
      form.ques27 = "";
      if (this.a_27) {
        if (temp) form.ques27 += this.options_text[27][1];
        else form.ques27 += "|" + this.options_text[27][1];
        form.opt += "A";
        temp = false;
      }
      if (this.b_27) {
        if (temp) form.ques27 += this.options_text[27][2];
        else form.ques27 += "|" + this.options_text[27][2];
        form.opt += "B";
        temp = false;
      }
      if (this.c_27) {
        if (temp) form.ques27 += this.options_text[27][3];
        else form.ques27 += "|" + this.options_text[27][3];
        form.opt += "C";
        temp = false;
      }
      if (this.d_27) {
        if (temp) form.ques27 += this.options_text[27][3];
        else form.ques27 += "|" + this.options_text[27][3];
        form.opt += "D";
        temp = false;
      }
      if (this.e_27) {
        if (temp) form.ques27 += this.options_text[27][4];
        else form.ques27 += "|" + this.options_text[27][4];
        form.opt += "E";
        temp = false;
      }
      if (this.f_27) {
        if (temp) form.ques27 += this.options_text[27][5];
        else form.ques27 += "|" + this.options_text[27][5];
        form.opt += "F";
        temp = false;
      }
      if (this.g_27) {
        if (temp) form.ques27 += this.options_text[27][6];
        else form.ques27 += "|" + this.options_text[27][6];
        form.opt += "G";
        temp = false;
      }
      if (this.h_27) {
        if (temp) form.ques27 += this.options_text[27][7];
        else form.ques27 += "|" + this.options_text[27][7];
        form.opt += "H";
        temp = false;
      }
      if (this.i_27) {
        if (temp)
          form.ques27 +=
            this.options_text[27][8] + (this.j_27 ? "，" + this.j_27 : "");
        else
          form.ques27 +=
            "|" +
            (this.options_text[27][8] + (this.j_27 ? "，" + this.j_27 : ""));
        form.opt += "I";
        temp = false;
      }
      if (temp) {
        this.scrollAndNotify(27);
        return;
      }
      this.loading = true;
      axios
        .post("http://49.232.203.197:8092/answer", form, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then(({ data: { code: code, message: msg } }) => {
          if (code === 200) {
            this.$notify.success({
              title: "提交成功",
              message: "感谢您的耐心回答~",
              showClose: false,
            });
            window.scrollTo({
              top: 0,
            });
            window.localStorage.removeItem("questionnaireTempData_TJU");
            setTimeout(() => {
              location.reload();
            }, 2000);
          } else {
            this.$notify.error({
              title: "错误",
              message: msg,
              showClose: false,
            });
          }
          this.loading = false;
        })
        .catch((err) => {
          this.$notify.error({
            title: "错误",
            message: err,
            showClose: false,
          });
          this.loading = false;
        });
    },
  },
  created() {
    let data = window.localStorage.getItem("questionnaireTempData_TJU");
    if (data) {
      this.$notify.success({
        title: "欢迎回来",
        message: "已为您自动填充保存的信息",
        showClose: false,
      });
      Object.assign(this.$data, JSON.parse(data));
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.main {
  background-color: #eceff1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
.content {
  width: 960px;
  max-width: 88%;
  padding: 50px;
  background: white;
  border-radius: 15px;
  margin: 50px 0;
  box-sizing: border-box;
}
.title {
  font-size: 22px;
  color: #1976d2;
  text-align: center;
  margin: 0;
  font-weight: 700;
}
.sub-title {
  font-size: 18px;
  color: #1976d2;
  text-align: center;
  margin: 10px 0;
  margin-bottom: 20px;
}
.question {
  color: black;
  font-size: 18px;
  margin: 0;
  margin-bottom: 12px;
  font-weight: 700;
  padding-top: 20px;
}
.question span {
  display: inline-block;
  width: 30px;
  font-weight: 700;
}
.options {
  padding-left: 30px;
}
.options-line {
  display: flex;
}
.options-line .checkbox {
  margin-right: 40px;
}
.input {
  width: 100%;
  max-width: 360px;
  height: 36px;
  padding: 0 15px;
  border-radius: 6px;
  border: 1px solid #1976d2;
  outline: none;
  box-sizing: border-box;
  font-size: 18px;
}

.input:hover {
  padding: 0 14px;
  border: 2px solid #1976d2;
}
.percentage {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.slider-line {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.slider-line p {
  width: 200px;
  margin: 0;
  font-size: 18px;
}
.slider {
  width: 100%;
}
.button {
  width: 200px;
  height: 50px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 40px;
  font-size: 20px;
}
@media screen and (max-width: 720px) {
  .content {
    padding: 30px;
    margin: 30px 0;
  }
  .title {
    font-size: 19px;
  }
  .sub-title {
    font-size: 17px;
  }
  .question {
    font-size: 16px;
  }
  .question span {
    width: 20px;
  }
  .options {
    padding-left: 20px;
  }
  .input {
    padding: 0 8px;
    font-size: 16px;
    height: 30px;
  }

  .input:hover {
    padding: 0 7px;
  }
  .slider-line {
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
  .slider-line p {
    width: 100%;
    font-size: 16px;
  }
  .slider {
    padding-left: 10px;
  }
  .button {
    width: 160px;
    height: 40px;
    margin-top: 30px;
    font-size: 18px;
  }
}
</style>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
.el-progress-bar__outer {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.el-progress-bar__inner {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.el-slider__stop {
  height: 12px;
  width: 12px;
  border-radius: 100%;
  background-color: #fff;
  border: 1px solid #aaa;
  transform: translateX(-50%);
  top: -3px;
  box-sizing: border-box;
}
</style>
