import Link from 'next/link'

const input = `FF--7-|7F--7F--|7F77-.FJF7F-7-F|7.77.FF7-F7---7-FJ7.|J--FJJ-FF-.JJ7LF7.J7F-7-F77L7.7-7.7FF77FF7..F--L7JF--.FF.7F|JFL7.7FL77.-7|7.F7-7FJ.FJ.-
FL-JF-L-JJFFJJ.7-JLL.7JF-J---7JLF7|LLF--.LJ.F7.LJL7--JJLJJJ.||JF|.F7LJ7.JJL7-FJ7L|-JL..LJJF-FJJ-|7|||F.|7.F-J7|FJF-JF--7L|7L---7-FL7FJ-FJ7.|
F7.||.7--7-LJ.FJ.|7..J-J7J|F.LFFJ7F7J|LJFL7.FJ7.|FJ..J|.|.F-LL-7..|F|J|7.FF77|F77J.F-JJ-J-|-|7JLL7-FJLFLF-7J.LJ7--7-7-L|JL-J7J7L..L-J|L|-FF7
||F||FL7F7-|7|LF7|F|7|7|F7|..FJ|FJFJ.L--.FL.F.LF7J|FF.L7FLJ|.|7FJ-LJ|.|FL||.LF7JF.F||7JF--L-|7F7.-..L.7||..L7FL7|JL7L7-L77L|F-7J.7F|FL77.LL7
-7FJFJFLJJ.F-JJ|LJL--7-F--F-|L|FL-LJF7J|F77.L--7L.|F77LJ7FJJFF-J7LL-J--JJ.FF7LJ.J-FLJFF|J|L7FFJLFLF77F7-F|7FJJJ.|7L-JLLLL.|.|.|||77JFJ.J..LJ
L77-F7FJ|FJJ.|.|J.J7LL7||7L7J7|JL7|FF7-JF-77.LLLJ|J-77.JL7.7LJ|F--FFL-J|JFFF7J|7.|LF-FF7FJ7F|J.FF7|L7F-77-J7LF-FJLF---JF|7LF77.FL.JL7|F7-FF7
-F|7JLF-JJFJFLF7LFLF.|JFJ7.J.L|JFF|LLJ7.LL7FF.L|7LJJLJ7.--.F.LFL7F--.F|F-7F||LF-7J.|FLLL-7L--F--JLJFJ|FJF7J|F||.L-7FJ..J|7-L|7-FJ7-F||JF-.7|
LLJL-JL7|.|J||LL7|-77L7|--|LF||F7L|JLF|7..L-FF-|-LJ|7-LJ7-F7F77.7J-L77-L7L-J|FJFJJ.L|J.FLLJLFL7F--7L7|L7||7FJFF7JLLF--7.J77-|JJ|F|.F7L-7.-7-
J7F7J|LJ-FJ.|L7.F|7L7-F|7.7F7.L|||||F|LL-7-J..FL7|.-F7||F7|||L77JF-.|F7|L--7||FJ||F-|7-|.|.L|LLJ|||FJL7|||F7.F7|.|LLF---||F7LJ.L-|FJJLLL7LF7
LFJ|LLJ|JLJF77FL-J-F|JFJF7LJ-|-LJL7-FF.F|.F..F|.FF-JJLF7|LJLJFJF77||-||F7F-J|||.FF7JJJJ|.7J-F-7FF-|L-7||||||FJL7FF---7JLFJL7|.|-7L||.|.F7-LJ
F|LJ.|.|.|F--|LJF7|F|.|7|FJJ|J.|J.F-.JFFF-777-F7|||LFJ||L-7F-J7||77LFJ|||L-7||L-7||J7|F-7LJLL7L7LFJF-J|||||||F7L7L-7FJ77.L7---F7L-J7.L-|..JJ
F|FJ-7---LF-J.FLF.LJL7J|-L|7LFLF7-JJ-LF7L7|F77|L7-F7F7||F-JL--7|L7F7L7|||F-J||F-J|L7-FLJL.|F7|FJFJFJF7||||||||L-JLFJL7|JFFJ|L-J7.LJ|7|F7F7||
JLLJ7L.|.LL-7--JL7J.7|7---|-J|LL|77L--|L-J||L-JFJFJ|||||L-7F--JL7|||FJ|||L7FJ|L--JFJ.L7-|FFJLJL7L7|FJ||||||LJL7J7J|F-JJ7-L-J7LLF7F|FF.L.J|FJ
|.L-F.L7F..F|J.FJ|7-F77JJ.LFF-77L-L.FLL--7|L7F-J7L7LJLJ|7FJ|LF7FJ||||FJ|L7||L|F---J.-JF7JFL-7F7L7||L7|||||L7F7L7F7|L-77|.L-.|L|J.F7LJ7LFF-JL
J-F||J7LJ777|F-|.L-FJL777.F7|FJ7J.L777FF7|L-JL-7J.L--7FJFJFJFJ|L7|||||FJFJ||FJL----7.F||-JJLLJL7||L7|||||L7||L-J|LJF-J7F7J|F7-J.FFJ|.F.F|L-.
J-FFLFJ7|L77F7|LFJ-L7FJ7FFJLJL7F7-J|F--J|L-7F7FJ|F---J|FJFJJL7L7|||LJ||FJFJLJF-----J7F|L7JF7|F7||L7|||||L7|||JF7L-7|JFFJ|7FJ|-|-7LL--7.FJ-|F
FF7.JJ.LFFF7|7J-JLF-JL--7L--7FJ|L7JLL--7|JFJ|LJF7L---7LJFJJ.FJFJ||L-7LJL7L7F7L7F--77F-JFJFJ|FJLJL-J|||||F|LJL7|L7FJ|F7L7|7L7|JJ.|F7J7|F.LF77
-FJ7..F.|F7-JL-F|7L--7F-J-F-JL7L7L7LFF-JL7L7|F7||F-7FJF7L7-FJFJFJ|F7L7F-JFJ||FJ|F-JFJF-JFJFJL-----7|||||FJF--JL7|L7LJL-J|F7||-F-77.L|-FJ..|7
.F7F-J|FFJLJ|LFF-7LF7|L-7JL--7L7|FJF7L-7FJ7|LJLJ||FJL7|L7L7L7L7L7LJ|FJL7FJFJLJFJL7|L7|77|FJF7-F7F-JLJ||LJFJF7F-JL-JF7F--J|LJ|7|FJ--7JL|.F7|.
-LJ||.|-.FJL7.---|L|LJF7L7JF7|FJ||FJ|F-JL7FJF7F-J||7LLJLL7L7L7L7L7FJ|F-JL7L--7|F7L-7|L7FJ|FJL-J|L-7F-J|F-JFJ|L7F7F-J||F-7|F-JFJ|J--J.-LF--77
|LFL7..L|7J7.7.|-J.|F-JL7L7|||L7|LJFJL7F-J|FJLJF7||F7F--7L7L-JFJFJ|FJL7F7|F--JLJ|F-JL7||FJL---7|F-JL7FJL-7L7|FJ|LJF7LJL7||L7FJFJ7.F--.F|JFJ|
J.7.|77|LL.-F77|FLFLJFF7L7LJLJFJL-7|F7||F7||F7|||||||L7FJJL7F7L7L7||F-J|||L-7-F7||F7FJLJL7F7F-J|L7F7LJF-7L7||L7L7FJL7|FJLJFJL7L-7.FF|7-LJJF7
LJ7.F7FF7|77F7F7F-7J-FJL7L---7|F77|||||||||||L7|||LJL7|||F7LJ|FJFJLJL7FJ||F-JFJLJ|||L-7F-J||L-7L7LJ|F-J|L-J||||FJL-7L7L-7FJ7-|F-JF|-J-77F7--
F.L-J-J|FF--JLJLJFJF7|F7L7F7FJ|||FJ||||LJ||||FJ||L-7FJ||FJL7FJL7L--7FJL7LJL-7|F-7||L7FJ|F7|L-7L7L7FJL-7-LF7|L7||7F-JFJ-FJ|FF-JL7-7J.||-|J|FJ
-J77F-LF-|F--7F7FJFJ|LJL7||LJFJ||L7||LJF-J|||L7||F7|L7|||F7LJF-JF7||L-7|F---JLJFJ||FJ|FJ|||F-J.|FJL--7L7FJ||FJ|L7L-7|F7L7L-JF--J7|FFF7FF7|7.
|LL7JF7-.LJ|FJ||L7L7L---JLJF7L-JL-J|L7FJ-FJ||FJ||||L7|||LJL-7|F-J|FJF-J||F7FF7FJFJ|L7|L7|||L-7FJL7|F7|FJL7LJL7|FJF-J||L7L7F-JF--7-F7||7L-J-7
J-L-.LJ.FL|-L-JL7L7L------7|L7F-7F7|FJL-7L7|||||LJL-J||L7F--J|L-7||FJF7||||FJ||FJFJFJL7|||L-7|L-7|FJLJ|F-JF--J|L7L7FJ|FJFJL--JF7|FJ|||7F|7F|
JJFJ-L7|7F--||F-JFJF7F----JL7||FJ|||L7F-JFJ||L7L----7LJFJL--7|F-JLJ|FJLJLJ||FJ||FL7L--JLJ|F-JL-7||L--7||F-J.F7|FJFJL7|L-JF7F7FJLJL7|||F7F777
..LJ||F-77FF-7L-7||||L----7FJLJL-J||.||F7L7|L7L7F7F-JF-JJF7FJLJF7F-JL7F--7LJ|FJL7||F-----JL-7F7LJ|F7FJLJ|F-7||||LL7FJ|F--JLJLJ|-F7|||LJLJ|F7
FF7F7-L7|F7L7|F7|L7|L-7F--J||F----J|FJ||L7|L7L7LJ|L7FJ|F7||L--7|LJF7|LJ7FJF-JL7FJFJ|LF7F-7F7LJL7FJ||L--7||FJ||||F-JL-JL--7F77F7FJLJLJF7F7LJ|
--FJL--JLJL7|LJLJFJL-7|L---JFJF---7LJFJL7|L7|FJF-JFJL-7||||F--JL--JL7F-7|FJF7FJL7L7L7|||FJ|L-7FJL-J|F7FJLJL7|||LJF-7F----J||FJ|L7F7F7|LJ|F7|
.F|F-7F--7FJL---7||F7|L---7.L-JF7F|F-J-FJ|FJ|L7L7FJF--J||||L---7F-7FJL7||L7||L-7|FJFJ|LJL7|F-JL---7|||L-7F-J|LJF-JJLJF77F-JLJFJFJ||||L7FJ|LJ
FFLJ|LJLFJL-7FF-JL-J|L---7|F-7FJ|FJL7F-JFJ|FJ7|FJL7L-7L||||F7F-JL7LJF7|||FJ|L77|||FJJL-7FJ||F7F--7||||F7|L7J|F-JF7JF7||FJF7F7L-JFJ|||FJL7|LJ
LFJ|FLJ7L--7L7L----7L-7F-J||FJL7|L7FJL-7L7||F7||F7|F-JFJ||||||F-7L7FJ||||||L7|FJ||L-7F7|L7|LJ|L-7||||LJ||FJFJL--JL7|LJLJFJLJL--7L7|||L7F||.L
LLJ|F|7|.F-JFJF7F-7L7FJ|F7LJ|JFJL-J|JF7L7|||||||||||F7|FJ||||LJ7|FJL7|||||F7||L7||F-J||L7||F-JF7||||L7FJ||FJF-7F-7LJF---JF7F7F7L-JLJL7|-LJ7.
L7F|J.FF-JF7L7||L7|7|L7LJL-7|FJF7F7L7|L7|||||||LJ|||||||FJ||L7F7|L7FJ|||||||||FJ||L7FJ|FJ||L7FJ||LJ|FJL7|LJFJJLJFJF7L----J||LJL-----7||7||F7
F77.|F-L-7|L7LJL-JL7|FJF---J||FJLJL7LJLLJ|||||L-7|||||||L7|L7||||FJ|FJ|LJLJLJ||JLJ||L7|L7||FJL7|||FJL7.LJF-JF7F7L-J|F7F--7LJF--7F7F-J||J7LFJ
LJLF-JL|LLJJL-7F--7LJL7L---7|LJF7F7L----7LJ|||F7|||||||L7||FJ||LJ|FJL7|JF7LF-JL7F--JFJL-J|||F7|||FJF7|F--JF7|LJL--7|||L-7L-7L-7LJLJ.LLJJLFJ|
LL.7.||LF-----J|F-JF-7L7F7FJ|F7||||F---7|F7||||LJ||||||FJ||L7|L7FJ|F-JL-JL7L7F7|L7F7L---7LJLJ|||||FJLJL---JLJF7F7FJLJ|F7L7L|F7L---7-JL|F||JL
FF-L7-J-L---7F7||F7L7L7LJ|L7||||||LJF-7LJ|LJ||L-7LJLJLJL7||FJ|FJL7|L-7F---JFJ|||FJ|L7F--JJF7-LJLJ||F7F7F----7|||LJF-7LJL7L7|||F---J7FJL7J.7J
7J--F7||F|7FJ|||LJL-JF|F7L-JLJLJ|L--JFJF7L7FJ|F-J.F7F-7FJ|||FJL-7||F-JL---7L7|LJL7|FJL----J|F---7|||LJLJF--7|||L-7|FJF-7|FJLJ|L--7J-L7J||-|.
LLF7JFLLLJFJFJLJF-----J|L7F7F7F7L---7L-J|FJ|-|L---JLJFJL-JLJL7F-J||L-7F7F7|FJ|F--J|L7F7F--7|L7F7LJ||F7F-JF-JLJ|F7LJL-JFJ||JF7|F7FJJFJL----|-
7F77LJ7||LL7|.LFJF7F7F7L7LJ||LJL7F-7L-7FJL7|FJF----7FJF7F---7|L-7LJF-J|LJ||L7|L7F7|FJ||L-7LJ|LJ|F7|LJLJF7L---7LJL-----JJLJFJ|LJLJFFJJ||LJFF.
|7||FL-|J-LLJ7.L-JLJLJL-JF7LJLF7LJLL-7LJF7LJL7L---7LJFJ|L--7LJF7|F-JF7L-7|L7|L7||||L7||F7L---7FJ|LJFF--JL----JF---7F7FF7F7L7|F7F77J|L|-77FFJ
--J7JF|J|JJLLF7F7JF7FF---JL---J|F---7L-7|L--7L7F-7L-7|FJF--JF7|LJ|F7||F7||FJL-J||LJ7||LJL7F7FJL7L7F7L-7F---7F7|F--J||FJLJL-JLJLJ|F--7LLLL-J7
FJ.L.FJ.LF7F7FFJL-JL7L----7F--7|L--7L--J|F-7|FJ|FJF7LJ|FJF7FJ||F-J|LJ||LJ|L7-F7LJF7FJL-7.|||L7.L7||L-7||F--J|||L---JLJF---------J|F-J7|LJL7J
FL|7|.LL7LFJL-JF7F-7L77F-7LJF7||F7.L----JL7LJL7|L7||F7|L7||L7|||F7|F-JL-7L7L7|L--JLJF7FJFJ|L7L7||||F7LJ|L7F7|||F---7F7L7F-7F7F---JL-7-|7-LJ|
|JJLJ.FL|JL---7||L7L7L7L7|F-JLJ|||F---7F-7L-7FJL7||||LJFJ|L7|||||LJL7F7FJFJFJL---7F7|LJFJFJ.L7|FJ|LJL--J-LJLJLJL--7||L7LJFJ|LJF7F7F-JLF77J.J
F.FJ|LF.J.F---J||FJ7L7|F||L7F-7LJ|L--7|L7|F-JL7FJ||||F-JFJFJ||||L-7FJ|LJ7L-JF----J||L77L7|F-7LJL-JF7F---------7F7FJLJ-L-7L-JF-JLJ||||LL-7FJ7
L-JLFJJ|.FL-7F7|LJ.F-JL-JL-J|F|F7L---JL7|LJF-7LJJLJ||L7FJLL7|||L-7|L7L---7F7L-7F7FJL7L-7|LJFJF7F--JLJF-----7F7LJ|L--7F7|L7F-JF-7FJL7-|LF7-L7
L|.--.F|-7JFJ|||F-7L-7F---7FJFJ|L7F7F-7LJF7L7|F77F7||FJL7-FJ||L-7LJFJF-7FJ|L--J||L-7|F7|L7FJ-||L--7F7|F----J||F7L---J||F-JL--JFJL--J-|.LJ.LJ
F|7|JL-JF-JL-JLJL7L7FJL7F-JL7L-J|LJLJFJF7||FJ||L-J|LJL-7L7|FJ|F-JF-JFJFJ|FJF7F7|L7FJLJLJ7||F-JL7F7LJLJL-----JLJL-7F7-|||F7F7F-J||F777|F-L|.|
7.FJ.LLFF-7-|-F-7L7LJF-JL---JF7F----7L-JLJLJFJ|F--JF-7-L-J||7LJF7L7FJLL-JL-JLJ||FJL----7FJ|L7F7LJ|LF------7F7F7F7LJL7||LJ||||LF77|L77J|FJLF7
F-J.-7F||.L7|FL7L7L--JF7F--7L||L---7L--7F--7L-JL--7|FJF-7FJ|F--JL-J|F7|F--7F--J||F7F---JL-J-LJL-7L7L-7F--7LJ|||||F-7LJL-7LJLJFJL7|FJ|LJ77.FL
LL77FLFJF7J|L7LL7L---7|||F7L-JL---7L--7|L7.L------J|L-JFJL-JL7F-7F7LJL7L-7LJF7FJ|||L7F-7F-7F7F7L|FJF7LJF7L-7LJLJ|L7L7F-7L7F-7L7FJ||.FJL-77L|
FJJL--7-JJFJJF77|F7F7LJLJ|L7F--7F7L-7FJL7L-------7-L7F-JF----J|FJ|L7F7L7FJF7|||FJ||FJ|FJL7||LJL-JL-JL7FJL-7L---7L7L7|L7L7LJFJFJL-JL7|||.L7.F
7LF-7F7F|F|-FJL7LJLJL7F7FJLLJFFJ|L-7LJF-JF7F7F---JF7||F7L---7FJL7L7||L7||FJLJLJL-J|L-J|F-JLJF7F7F---7|L--7L--7FJ-|FJ|FJ.L-7L-JF---7L-7--7.LJ
L-7LLFLJLL|-L-7L7F-77LJLJF77F7L-JF7L-7L--JLJLJF7F7|||LJL7F-7||F7|FJ||FJ||L7JF--7F-JF-7|L7F-7|LJ||F--J||F7L--7|L-7||7|L7F-7L--7||F7|F-JJ-J-L-
7FJ.J|LJJF--JLL7LJFJF----JL-J|F7FJL--JF7|F----JLJLJLJF-7LJFJ|||LJ|JLJL-J|FJFJF7LJF7L7||FJ|FJ|F-J||F-7L-JL---JL7FJ|L7L7||FJF-7|L7||LJ7FF7..FJ
F|FFJ|7L-7JF.FJ|F7L7|F---7F-7LJ|L-----JL-JF7F--7F7F--JLL7FJ-LJL-7L7-F7|FJ|.|FJ|F7||FJLJ|FJL7|L7FJLJ-L-------77LJFJFJJ|||L-JFJL7LJ|F--7|J-7JJ
LJ-..||.J|FFF7FJ|L7|LJF-7LJFJF7L7F----7F--J|L-7|||L----7|L7|J|F-JFJFJL-JFJFJL7LJ||LJF-7LJF7LJ|LJJF----------JF-7L-JF7LJ|F--JF7|F7||F-J7|-||7
J.L7L-F7LLFFJ|L-J7||F7L7L-7L-JL7|L---7|L--7|F7||||F----JL7|F7FJF7L7L7F-7|||F7|F-JL7F|FJF-J|F----7L--7F7F-7F7F|FJF7FJ|.FJL7F-J|LJLJ||L|JL7F-7
.F7J|LJ|7.FJFJJ7LFJ|||FL-7|F7F-JL----JL---J||LJLJ|L-----7|LJ|L7|L7|LLJFJL7|||||F--JFJL7L-7||F--7|JF7LJLJFLJL7||7|||FJFJF7LJF7L7F7FJL7F77|LJ|
FL7FL7.FJ7L7L-7FFJFJ||F--JLJLJF-----------7|L-7F7L-7F---JL--JFLJ-LJ-L-L7FJLJ||LJF7F|F7L--J|LJF-JL7||F7JF7F7FJ||FJLJ|FJFJL7FJL7LJLJF7LJ|-FF-.
7L77F7JJ.F-JF7L7L7|FJLJF--7F-7L7F---------JL-7||L-7|L-----77FF77||JJ-LLLJ.|-|L7FJL-J||F7F7L-7L--7LJLJL-J||LJ7|LJF--J|FJF7|L-7|F---JL--JFF|J.
J-|J-F7L-L--JL7L-JLJF7FJF-J|-L-JL--------7F7JLJ|F-JL7F----JF7||-|..|-FJLJ-L-L7|L-7F7|LJLJL-7L-7FJF-7F7F7LJ7F-JF-JF7FJL-J||F-J|L---------7-7|
.L|JFL-7L||F-7L-7F7FJ||7L--JF7.F--7F7F7F7LJL7F-JL--7|L7F7F-JLJL7F7--.LJ-|.FLLLJF7LJ||F-----JF7LJFJ.||LJL---JF7L--JLJF-7FJ|L7LL7F-7F-7F--JF7|
7.JFJLF|LF7L7L7FJ||L7||F----JL-JF7LJLJLJL---J|F7F7FJL-J|LJF7F7FJ||LL7L7FF-----FJL7|LJL--7F7FJL7FJF-J|F7F7F7FJL7F7F--JJLJ-|FJF7|L7LJFJL-7.|JF
F.FFJFLJL|L7L7|L7||FJLJL--------JL-----7-F7F7||LJ||F7F7|F-JLJLJ-|||.L|F|7-|-|.|F7L7F7F-7LJLJ-FJ|FJF7||LJLJLJF7|||L------7LJF||L-JF7L--7|777|
LFJF-L-|FL7L-JL7LJLJF------------------JFJ||||L-7LJ|||LJL-7F7JF-J|77.|-|LF--|FLJL7|||L7L----7L-JL-JLJL------J|||L7F--7F-JJF-JL---JL-7|||7.7J
F|LJ7-FJFLL--7FJF7F7L----7F-7F7F7F--7|F7L7LJLJF7L-7|LJF---J||7L7FJJL|J-|F|..|F7F-J||L7L7F--7|F-7F-----7F7F7F-JLJFJL-7|L7-FJF7F-7F---JF|L7-7|
-JF.|-J.F7F--JL7||||F7LF-JL7LJLJLJFFJFJL-JF7F7||F-J|F7L----JL--JL77-LLFJ-.--FJ|L-7||FJFJ|F-JLJFJL----7LJLJLJF7F7L---JL-JFJFJLJ|LJ-J-L-L-J7.L
LF-7||LF||L---7LJLJLJL7L7F-J|F-----J7|F---JLJ|||L--J||F7F7F7F7F7FJ7J7|FJL77FL7|F7|||||L7|L7F-7|7F--7LL------JLJ|F7F7F7F7|FJF7|F-7F|77.L.F|7.
F||FF|-FJL7|F7L------7L-J|F-7L-------JL7F---7LJ|F-7FJLJ||LJLJLJ||JJ-L-J||F||FJLJLJ||L77LJLLJFJL7L-7|F-----7F7F-J|LJLJLJ||L7|L7|FJF77F777FF--
.J.L-J7L-7L-JL----7-FJF7FJL7L-7F-------J|F--JF7LJ7|L-77|L---7|FJ|.|F|7|FFFF7L----7||FJF7JF7FJF7|F7||L----7||||F7|F-----JL7||FJ||L|L7F7FL7L|J
FLJF--JJFL-------7|FJFJLJF7L-7LJF-------JL---JL--7|F7|FJF-7FJFL-JFFF7LF-F-JL7F---J||L7||FJLJFJ|LJLJ|F7F7FJLJLJ|||L--7F-7FJLJL-JL-JFJ|L7JJFJ.
F.L||FFFLF------7||L-JFF-J|F7L--JF---7F-7F7F7F-7FJ||LJL7L7|L7F-7-L-LJLJLL--7LJF--7|L7|||L-7FJFJF7F7LJLJ|L7-F7J|||F--J|FJ|F--------JJ|FJ.F--|
FJ-L7-F7JL-7F7F7LJL7F-7L-7LJL--7.L--7|L7||LJ|L7|L7|L-7FJFJL7|L7|.L7||-7LLF7L--JFFJL7|LJL--J|FL7|LJL7F-7L-JFJL-JLJ|-F-JL-JL---7F7F7F7||F7J-||
F-77JJF----J|||L7F7|L7|F7L----7|F---J|FJLJF7L-J|FJL7FJL7|J-LJL|L7J7FJ|-LL||F-7F7L-7LJF--7F-JF7LJJF7LJ7L---JF-7F-7L-JF7F---7F7LJLJLJLJLJ|F-J7
-7F7|.L-7F7FJLJFLJ|L-J|||F----J|L---7|L--7|L--7|L-7|L-7LJF-77L|FJ-F-7F7..||L7LJ|F-JF7|F7||LFJL7F7|L--7F---7L7|L7L--7||||F7LJL--7F------J7|||
FLF-77LLLJLJF7F7F-JF-7|||L--7F7L7F--JL7F-J|F--JL7FJL--J||L7|F7|L-7L7|||F7|L7|F7||F7|LJ|LJ|FJF7LJ|L--7LJF-7|FJL7L--7LJ|L-JL7F--7LJLF7F7||.-F-
F--JL|F7|JJFJLJLJF-JFJLJ|F7LLJL7|L---7LJ-FJL---7|L-7F---7FJ||LJF-JFJLJ||LJFJLJ||LJLJF-JF7|L-JL-7|F7JL-7|FJLJF7L---JF7|F--7LJF7L--7|LJL777L|J
|.L|7F-JJ|-L7F7F7|F-JF-7LJ|F---JL----JF-7|F----JL-7|L-7FJ|FJL7FJ.FJF--JL-7|F7FJL7FF7L--JLJFF-7FJLJL---J|L---JL--7F7||LJF7|F-JL--7LJF--JL7FL7
.JLFFF7.LFF-J|||LJL--JFL-7|L---7F--7F7|FJ|L-7F--7-LJF-J|FJL7FJL-7L7L-7LLFJ|||L7FJFJ|F--7LF7L7|L7F-7F-7FJF------7LJLJL-7||LJF7F7FL--JF-7.F--J
..F-FJL7||L--JLJFF-------JL-7F-J|F-J|LJL-JF-J|F-JF-7L-7||F-JL7F-JJ|F7L7FJFJ||FJL7|FJL7FJFJL-JL-J|FJ|FJL7L--7F7.L--7F-7LJL7FJLJL-7F7FJFJ-LJ.L
--LJL7FJF----7JF7L-7F-7F-7F7|L--JL--JF7F-7L--JL--JFJF-J||L7LFJL7F7LJ|FJL7L-J|L7FJ||F7|L-JF7F---7|L-JL--J|F7LJL---7|L7|F-7LJF---7LJLJFJF7JFJ7
|.|||||-L---7|FJL7FJ|FJL7||||F7F-----JLJFJF--7F---JLL-7|L7L-JF7|||F7||F7L--7L7|L-JLJLJF-7||||F-J|F--7F---JL-7F---JL-J|L7|F7L--7L7F7FJL||.|-7
|7.-FJL7..F7||L-7|L7||F-JLJ||||L------7.L7L-7|L---7.F7||FJF--JLJ|||LJ|||F7FJFJL---7F7FJFJ||L7|F-JL-7|L-----7|L------7|FJ|||F7FJLLJLJ||||-7||
L-7-L-7L--JLJL7FJL7LJ||F-7FJLJ|F7F---7L-7|F7||F---JFJ|||L7L7F7F-J|L-7LJ|||L7|F7F-7|||L7L7|L7|LJF---JL-7F---JL-------JLJ-LJLJLJF7F-7F7FJ|-JF7
.LLFJJL7F-7F-7LJF7L-7LJL7LJF-7LJ|L--7|F7||||||L---7L7|||FJFJ|||F-JF-JF-J||FJ||LJFJLJL-JFJ|FJ|F7L-----7|L----7F-7F7F-----------J|L7LJLJFJ7F-L
L.L.L7LLJFLJLL7FJ|F-JF7FJF-JLL-7L---JLJLJLJ|||F7F-JFJ|||L7L7|LJL-7L-7L-7||L7||F-JF7JF-7L-JL7|||LF----JL-----JL7||||F--7F-------JFJF7F-JJJLJJ
|7.FLF7F---7F7LJFJL--JLJFJJF-7FJF7F-------7|||||L-7L7LJ|7L7LJF7F7|F7L7FJ||FJLJ|F7|L7L7|F7F7LJ|L7L--7F7F7F7F---JLJLJL-7|L--------JFJ|L--7|FL7
LL-F7|LL7F7LJL-7L---7F-7L-7L7LJFJLJF------JLJLJL--JFJF7|F7|F-JLJLJ|L-JL-J||F--J|LJFJ-||||||F7L7|.F7LJLJLJLJF7F7F--7F-JL-7F7F7F--7|-L7F7|JJ-|
77--JJ-LLJ|F7F7L----J|FJF7|7L7FJJF-JF7F7F--7F7F7F7LL-J|LJLJL7|F7F7L-----7||L7F7|F-JF-J||LJLJL7||FJL--------J|||L7FJL---7LJ|||L-7|L7LLJLJ7LF-
|-7JL|.F|JLJLJL7F7F7FJL7|LJF7LJF-JF-JLJLJF-J|||LJL-7F-JF7F7FJFJLJ|F-7F--JLJFJ||||F7L7FJL--7F-J||L----------7LJ|FJL--7F7L-7|||F-JL7|.LLL-|.|J
JJF7JFLJ||F----J|LJ||F7||F-JL-7L7FJF----7L-7|||F---JL--JLJ|L-JF--JL7|L--7F-JFJ||||L-J|F-7FJ|F7||F7F7F-----7L-7||F--7LJL-7||||L7LLLJ--7|F-7L.
||L7.|7|FFL-----JF7LJ|||||F--7L7LJFL---7|F7LJLJ|F-7.F7F7F7|F-7|F7F7||F7FJL7-|FJ||L--7||FJL7|||||||||L----7L--JLJ|F-JJF-7|||||FJ77-JF|77|LJ7J
7-FJFF-LLF-------JL--J|LJLJF7L7|F7F----JLJL----JL7L7|||||||L7|LJ||LJ|||L-7|FJL7||FF7|LJ|F7||||||||||F---7L--7F7FJL---JFJLJ||||F-77.JJL|7LJ7.
L7|F-F--LL7F-7F-7F-7F7|F7JFJL-J|||L----7F7F7F-7F7L7LJ||||LJFJL--JL-7|||F7|LJF-J||FJ||F-J|||LJ||LJLJ|L--7L---J|||F---7FJ7LFJ||LJFJ7FL7L||7JL-
|FL.L|.F-|LJLLJFJ|FJ||LJL-JF--7LJL-----J|||||FJ|L7|F-J|||F-JF7F7F7FJ||LJ||F-JJFJ|L7||L--J||F7|L---7L7F7L---7-|LJL--7LJF7LL-JL7FJJ.LFFF-JL...
FJJ77LF--7F|LLLL-JL-JL-7F--JF-JF--------J||LJ|FJFJ||F7|||L-7||||||L7|L-7LJL7F7|FJ7|||F---JLJ||.F77|FJ|L---7L-JF7F-7L--JL-7-LL||L|7F-|LLL7..F
LJJ||JJLJ|F7.|F-------7LJF7FJF7|F--------JL-7|L7L7|||||||F-J|||LJ|FJL-7L-7FJ||||F7|||L7F7F7FJ|FJL7|L7|F7F7L---JLJJ|F7F---J7.F||F|LF-|7JF---7
.|LFJJFLF|-|7LL--7F7F7L--J|L-JLJL--7F7F-7F7FJL-JFJ||||||||F7||L-7|L--7|F7||FJ||LJ||||FJ||||L7LJF-J|FJLJLJL-------7LJLJ7FF---7|L7|F|-FJL|JF||
F-L|J7F--|F77-|F7LJ||L7F-7L7JF7F7F7|||L7|||L---7|FJ|||||||||||F7||F--J||||||FJL-7||LJL7|||L7L-7|F-J|F7F7F-7F-----JF7F7F7|F--JL-JF---L7|.||F7
|F7-7F|L|L-L7-FJL7-LJLLJ.L7L-JLJLJLJ||-||||F7F7||L7|||||||||||||||L-7FJ||||||F7J||L--7||||FJF7||L-7|||||L7|L------JLJLJLJ|LL|FL--.F-L-|-LJ|J
.||F-||-FJ7L--|F7L--7F--7FL7F7F-7F-7||FJ||LJ|||||FJ||LJ|||||||||||F7||FJLJ||||L7|L7F-J|||||FJ|||F7|LJ|||FJL7F------7F7F-7L7.L|F-FJ-|LLLFJ-.J
F|F--F7F|-J.|7LJL7F7|L-7|F7||||FJ|7||||-LJF7||||||FJ|F-J|||||||||||||||F7FJ|LJF||FJL-7||LJ||FJ|LJ|L7FJ||L-7LJF---7LLJLJ-L-J7|||.L7.7|..L|..|
7-J|F|F7|L|.LLF-7LJ|L-7|||LJ|||L-JFJ||L---J|||||||L7|L-7|LJ||||||LJ|||LJ|L7L7FFJ|L-7FJ|||FJ|L7L-7|FJ|FJ|F-JLFJF7FJF7F7JF7F7F--7JJ7F|-J7F|.FJ
F7L|7JLL7-77F7L7L--JF7LJLJF-JLJF-7L7|L7F---J||||LJ-||F-JL-7LJ||||JFJ|L7FJFL7L7L7|F-J|F|L7L7L7L7FJLJFJL7|L---JFJ|L-JLJL7|||LJF-J.FJLJL|7F-|--
L7F|.F|JL7|7LL.L-7F7|L-7F7L--7LL7L-J|FJL--7-LJLJ.F-J||F7F7L7FJ|LJFJFJFJ|F--JFJFJ||F7L7|FJFJFJFJL--7L-7||F7F7FJ-L------J|||F7|7-LF|7LF-JJ-F7|
7||-|F|F-JLJJL7LFJ|||F-J||F--JF7L-7FJL7F--JF7F7.FJF7|LJ|||FJL-JF-JFJJL7||F7FJ-|FJLJL7||L7L-J|L7F-7L7FJ|LJ||LJ7JF7JF7FF7||||LJJ7L|J.|L7.||L|J
L|JL7--J|7.FF7.FL-J||L7FJ|L7F-JL--J|F-JL---JLJL7L7|LJLFJ|||F-7JL7FJF7FJ||||L7FJ|F---J|L7L--7F-JL7L-JL7|F-JL7F7FJL-JL7|||LJL-7JJ|F-L-J-L7FJLF
LJJFJ-F-7F-7FL-LF--JL7|L7L-JL--7F-7|L7F-7F-7F7FJ||L7F-JFJ|LJFJF7|L-J|L7|LJ|FJ|FJL7F7FJJ|F--JL7F-JF--7LJL7F7LJLJF-7F7LJLJF7F7|7JFJF|-|JL7L7FJ
LF|7..LF|F-FF7.LL-7F7|L-J-F7F7FJL7||FJ|FJ|J||||F-JFJL-7|.L7FJ7|LJF7FJFJ|F-JL7|L77|||L-7LJF---JL-7|F7L7F-J|L7F7FJ|LJ|F-7FJLJ|L7-|7F-J|.FJ.L77
FFJ.|JFF|.--JF.7JLLJLJ7F--JLJLJF7|LJL-JL7L7|||||F7L-7FJL-7|L7FJF7|||FJFJ|F7FJ|FJFJ||F7L-7L7F7F-7LJ|L7|L-7|7|||L7F-7LJF|L-7L|FJLL7FJ-|J-JFLJJ
-J7|J|--J||LLF.|L-JF--7L----7F7|LJ|F77F7|FJLJLJLJ|F-J|F7FJ|FJL7|||LJL7L7|||L7||FJFJ||L7FJ7LJ||J|F7L7LJF-JL7||L-J|FJF7FJF7L7||.|L|.LFJJ.F7LFJ
|L-7FJ..F-777.77FJJL-7L7F7F7||||JF-JL-JLJL----7F-JL-7|||L7|||FJ||L7F7|FJ|||FJLJL7L7||FJL-7F-JL7||L7L7FJF7FJLJF7-|L-J||FJL-JLJFFF77LFJFF7J-J7
77JLJJL77L|77-|LLJ.LLL7LJLJLJ||L7L7F---7F-7F--JL-7F-JLJ|FJ|L7|FJ|FJ|LJL7|||L7F--JFJLJL7F-JL-7FJ||7|FJL-J|L---JL-JF7FJ||F7F--77L7J7LL-7F|-7-F
.7L7.FLL|-F7J.|-.|7.|-L7F7F-7||FJFJ|F--J|FJL---7FJL7F7FJL7L7|LJFJ|FL7F7||||FJL7F7|F---JL7FF-J||LJFJL-7F-JF7F-7F7FJLJF|LJLJF-J-JL7|7JF-7L-L-J
.77L-|7FL7L777J|7F-.FFFJ|LJFJ|||LL7||F7FJL7F7F7||F7LJ|L7FJFJL-7L7|F-J||||||L-7LJLJL7F7F7L7L-7L--7|F--JL7FJ|L7|||L---7|F7F7L77--7|JF7L7J|J7L-
F||7FJ.L.L7.J7-7|J-LFFJFJF7|FJ||F-J||||L-7||LJLJLJ|F-JFJL7L7F7L7|||F7|LJ|||F7|-F7F-J|LJ|FJF7L7F7||L---7|L7|FJ|S|F--7|LJ||L7L7JF-7---L|LFFJ7|
-7L-L.FJ.F77JF.|JJFLLL-JFJLJL7LJ|F7|||L7FJ|L-7JF--JL-7L7FJFJ||FJ|||||L-7|||||L-J|L-7L7FJL-J|F||||L7F--J|FJ||L|||L-7|L-7||FJFJ7F-|7L7F-F-J-J7
FL.|-L77F7LJ.L.|F-7-|F-7L-7F-JF-J||||L7|L7|F-JFJF7F7FJFJ|FJFJ|L7||LJL7FJ|||||F-7|.FJFJL7F--JFJ|||||L--7|L7|L7LJ|F-JL7FJ||L7L77L-FJF|J-L7F--7
-77||7|7J|JLJ|.LL7|F-L7L--JL-7L-7||||FJL7||L-7|FJ|||L7L-JL7|-L7|||FF7|L7|||||L7LJFJFJF-JL-7FJFJ|L7L7F-JL-JL7L7FJL--7||JLJJ|FJJ7-JFL|JL|-LJ7|
F|J|FFJ.F|.F-FJ-LJL-J.L---7F7L7-LJ||LJ.FJ||F7||L7|||FJF---JL-7||||FJLJFJ||||L-J|FJFJLL7F7FJ|FJFJFJFJL---7F-JFJL-7F-JLJF||.LJJL7.|7-|LLF7LF-J
F|-LF-7F|F-J-JF-7LFJ7FF---J||FJF--J|F--JFJ|||||FJ||||-L--7F7FJLJ||L-7FJ|LJLJF7F7L7|F7FJ|LJFJL7L7L7L-7F7FJ|F7L-7-LJJ|-J-F7JJ7.|L.FJF--FJ-.J.J
L|.LLJF|.F|J7L|J|7.|7FL-7F7|||FL7F7|L7F7L7LJ||LJFJ|||FF7FJ||L--7||F-J|F7F-7FJLJL-JLJ|L7|F7|F7L7L7|.FJ|LJ|LJ|F7L---7||7.|J|7L77.FJJL7|FJ|.|7|
FJ-7.FJ.--JF7J|7L-|-7-J.LJ|||L7|||||FJ|L7L7FJL7JL-JLJFJ|L7||F--JLJL-7LJ|L7LJF7F7F7F7|FJLJ|LJ|FJFJL7L7L--7JLLJ|F-7FJ-.-FJ.J7F--7|.F-L-|F7.F-L
|L7F7|J7.|7F77L-7LJ.F-|-||LJL-JFJ|||L-JF|FJL7FJJ|||.FL7L-J||L--7JF--JF7L7L7FJLJ||||LJL7F-J7FJL7L7FJLL---J-.LJ|L7||.|7L|LLF-7|-LL.LFJLJ-|7LJL
F-J.FJ.J.FJ7|FJ.777--7JF.JJ|J.LL-J||F---JL-7||JF--J.F-JF-7||F7FJFJF7FJ|FJFJL7F-J||L7F7|L--7L7FJ|||LF--7J|JFJLL7|LJ777-|.L|J-J.LJ7L-7-LF7FJ-7
F7F|L|-FFJJ.L---LJ-7FLFJL77F---JJLLJL-7F7F-JLJ.||.|-L7FJFJ|||LJFL7||L7||FJF-J|F-JL7||LJF7FJJ||F-JL-JF7L---77-L||J-JJ7J.77L-FL.J.|J|77.JJFJF-
FJ7L--77L--7L|77LJLL-JLFJF--7-|JJ|LL-LLJ|||||.JF|FF7LLJFJFJ|L7||J||L7|||L7|F-JL--7LJ|F7|LJJLLJ|F7F-7|L7F--J|LLLJFJJ.L..7JLF-.7LL.FFJ77||J.|.
L-|.|7LJF|F|-FF7FFJJ|J.L--FJJ.||FJ|LJ|LJ||7-LJLJ.JLJ7-LL7|LL7|J-FJ|LLJLJFLJL7F7F7||FJ|LJFLJJF-J|||-|L7||7|L|.|L7-7|F|-LJ.FLJF|7LFFLJ-777-|.|
|JL77-LJF-7L-J|LJF|-|.F77|LLF-|-LLJJ.L..LJJ.|.L|7J|L-7JL||JLLJ-LL-JJ|LJ-LLF-J|LJ|L7L-JFJJ|FFL7FJ|L7|FJLJ--LJ-JJ||---7FLJL7J||J|L7JF|F-FJ-L-L
|J|.L7|7.L|FLFLL-L.||..J7-7.L-|7L7LF|LF77.F--7|L|LFF|..LLJ7LLJJ.L-JF|J.LLLL--JJL|FJ-|---LL--.LJFJFJ|L7.L.FL|-|.LF7L--JJ|.L-J|-|-J.LJL-77|..|
|-J7LJ|FL7.F.|JL77LFL7.L|L--7LL|7|L-JF7JL-||L-7.LF|-777.|J77|J.F|J.7J-F7L|.F|..FJL-7J.|.7.LLFJ-|FJFJFJ7L-7.|.7-JJF.FFL7-LJ-F|77JF7-F|L-777.F
77JF.||77.J-.|--J77|L7.F7J7|LFLLF|7J7.|F|.J7.L|.-|J|JFFJ.||LJ7FFJ-7L7FFF.L7F-F7L-7FJ77|.LJ.FJ77LJ-L7L7.LL--J.|7F7L.FJ||.|L7-L.JFJ77|LJL--L.L
|F-|FFL7-.|F7-7.LL|-J|LLJ-F-FJ7-LJJF-7FL7.FL7F-7---J--.LLL-7F7L||.|JFLJJ.|--.|L7.LJF--J-7.FF--7.L|FL-J7.LLL-FLL--7F7LLL-JFJ7|.|FLLJ7|LLJJJ..
|JJ|LL7JF--LJ7LF7|L|||JJ|-7J|7L.LJ-7.-7FL-LJ-7JJ.LFJ.LL-|FF|LJF---JF-7.7JJ..7-.J-FL|J-J.FJ--7JJ-7||-JJ---L|.LJ|.F|L77J||LJ.FL--J.FJLF7.|F7FF
L|L|.LLL-JL|.|-777-L77J.L-LL|7L|.L7J-L.FL-J.LJL7J-7J-L.LL-77.7-JFJL--|7L|J.--J.LJL-JJ.F7LJ.LJ.L----JLJJ.FJ|...7J-L-L7L|-7L7-LFJJ-|J--|7JLL-L`

const sampleInputPart1 = `7-F7-
.FJ|7
SJLL7
|F--J
LJ.LJ`

const sampleInputPart2 = `.............
.S---------7.
.|F-------7|.
.||.......||.
.||.......||.
.||.......||.
.||.......||.
.|L-7...F-J|.
.|..|...|..|.
.L--J...L--J.
.............`

const sumIt = (prev: number, item: number) => prev + item

const useTestInput = false
const sharedInput = useTestInput ? sampleInputPart2 : input

let animalY = 0
type notNumber = 'S' | '.' | '|' | '-' | 'L' | 'J' | 'F' | '7' | 'x'
let pipes: Array<Array<number | notNumber>> = sharedInput
  .split('\n')
  .map((line, y) => {
    const row = line.split('')
    if (row.includes('S')) animalY = y
    return row
  }) as Array<Array<notNumber>>
let animalX = pipes[animalY].indexOf('S')

// next move start peeked at input
let nextMove: number | notNumber = '|'
let steps = 0
let walk: Array<[number, number, 'N' | 'E' | 'S' | 'W']> = []
const connectFromN = ['|', 'J', 'L']
const connectFromE = ['-', 'F', 'L']
const connectFromS = ['|', 'F', '7']
const connectFromW = ['-', 'J', '7']
const connectToN = ['|', 'F', '7']
const connectToE = ['-', 'J', '7']
const connectToS = ['|', 'J', 'L']
const connectToW = ['-', 'F', 'L']
const length = pipes[0].length - 1
const height = pipes.length - 1
const moveAnimal = () => {
  pipes[animalY][animalX] = steps
  steps++
  // console.log(nextMove, animalX, animalY)
  const againstEdgeN = animalY === 0
  const againstEdgeE = animalX === length
  const againstEdgeS = animalY === height
  const againstEdgeW = animalX === 0
  const canMoveN = !againstEdgeN && connectToS.includes(nextMove as notNumber)
  const canMoveE = !againstEdgeE && connectToW.includes(nextMove as notNumber)
  const canMoveS = !againstEdgeS && connectToN.includes(nextMove as notNumber)
  const canMoveW = !againstEdgeW && connectToE.includes(nextMove as notNumber)

  let nextLook = canMoveN && pipes[animalY - 1][animalX]
  const twoSteps = steps > 2
  if (
    (nextLook === 0 && twoSteps) ||
    connectFromS.includes(nextLook as notNumber)
  ) {
    nextMove = nextLook as notNumber
    walk.push([animalX, animalY, 'N'])
    animalY--
    return
  }

  nextLook = canMoveE && pipes[animalY][animalX + 1]
  if (
    (nextLook === 0 && twoSteps) ||
    connectFromW.includes(nextLook as notNumber)
  ) {
    nextMove = nextLook as notNumber
    walk.push([animalX, animalY, 'E'])
    animalX++
    return
  }

  nextLook = canMoveS && pipes[animalY + 1][animalX]
  if (
    (nextLook === 0 && twoSteps) ||
    connectFromN.includes(nextLook as notNumber)
  ) {
    nextMove = nextLook as notNumber
    walk.push([animalX, animalY, 'S'])
    animalY++
    return
  }

  nextLook = canMoveW && pipes[animalY][animalX - 1]
  if (
    (nextLook === 0 && twoSteps) ||
    connectFromE.includes(nextLook as notNumber)
  ) {
    nextMove = nextLook as notNumber
    walk.push([animalX, animalY, 'W'])
    animalX--
    return
  }
}
while (!Number.isFinite(nextMove)) {
  moveAnimal()
}
// NOTE steps had one extra increment
const part1 = steps / 2
console.log(part1)

walk.forEach(([x, y, dir], i) => {
  let right: notNumber | number = 0
  let lastRight: notNumber | number = 0
  const [__, ___, lastDir] = walk[i - 1] ?? [null, null, '?']
  switch (dir) {
    case 'N':
      right = pipes[y][x + 1] ?? 0
      if (!Number.isFinite(right)) pipes[y][x + 1] = 'x'
      lastRight = lastDir === 'E' ? pipes[y + 1][x] ?? 0 : 0
      if (!Number.isFinite(lastRight)) pipes[y + 1][x] = 'x'
      break
    case 'E':
      right = pipes[y + 1][x] ?? 0
      if (!Number.isFinite(right)) pipes[y + 1][x] = 'x'
      lastRight = lastDir === 'S' ? pipes[y][x - 1] ?? 0 : 0
      if (!Number.isFinite(lastRight)) pipes[y][x - 1] = 'x'
      break
    case 'S':
      right = pipes[y][x - 1] ?? 0
      if (!Number.isFinite(right)) pipes[y][x - 1] = 'x'
      lastRight = lastDir === 'W' ? pipes[y - 1][x] ?? 0 : 0
      if (!Number.isFinite(lastRight)) pipes[y - 1][x] = 'x'
      break
    case 'W':
      right = pipes[y - 1][x] ?? 0
      if (!Number.isFinite(right)) pipes[y - 1][x] = 'x'
      lastRight = lastDir === 'N' ? pipes[y][x + 1] ?? 0 : 0
      if (!Number.isFinite(lastRight)) pipes[y][x + 1] = 'x'
      break
  }
})

const pipesPath = pipes
  .map((row, y, rows) =>
    row
      .map((cell, x, cells) => {
        if (cell === 'x') return 'x'
        if (!Number.isInteger(cell)) return ' '
        const val = cell as number
        const yN = rows[y - 1]
        const yS = rows[y + 1]
        const xE = cells[x - 1]
        const xW = cells[x + 1]
        // ━
        if (xE === val - 1 && xW === val + 1) return '━'
        if (xE === val + 1 && xW === val - 1) return '━'
        // ┃
        if (yN?.[x] === val - 1 && yS?.[x] === val + 1) return '┃'
        if (yN?.[x] === val + 1 && yS?.[x] === val - 1) return '┃'
        // ┏
        if (xW === val - 1 && yS?.[x] === val + 1) return '┏'
        if (xW === val + 1 && yS?.[x] === val - 1) return '┏'
        // ┓
        if (xE === val - 1 && yS?.[x] === val + 1) return '┓'
        if (xE === val + 1 && yS?.[x] === val - 1) return '┓'
        // ┗
        if (xW === val - 1 && yN?.[x] === val + 1) return '┗'
        if (xW === val + 1 && yN?.[x] === val - 1) return '┗'
        // ┛
        if (xE === val - 1 && yN?.[x] === val + 1) return '┛'
        if (xE === val + 1 && yN?.[x] === val - 1) return '┛'
        return '*'
      })
      .join('')
  )
  .map((row: string) => {
    const startX = /x +/g
    const endX = / +x/g
    const blankRow = /^ +$/
    const starts = row.matchAll(startX)
    const ends = row.matchAll(endX)
    const blank = row.match(blankRow)
    const explodeRow = row.split('')
    for (let match of starts) {
      for (let i = 0; i < match[0].length; i++) {
        explodeRow[(match.index as number) + i] = 'x'
      }
    }
    for (let match of ends) {
      for (let i = 0; i < match[0].length; i++) {
        explodeRow[(match.index as number) + i] = 'x'
      }
    }
    if (blank) {
      for (let i = 0; i < blank[0].length; i++) {
        explodeRow[(blank.index as number) + i] = 'x'
      }
    }
    return explodeRow.join('')
  })

const part2 = pipesPath
  .map((row) => {
    const singleSpace = / /g
    return Array.from(row.matchAll(singleSpace)).length
  })
  .reduce(sumIt, 0)
console.log(part2)

const CoDeO = () => {
  return (
    <main>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <h2>Day 10</h2>
          <p>Part 1: calculated is {part1}, and answer is 6870.</p>
          <p>Part 2: calculated is {part2}, and answer is 287.</p>
          <p>
            <Link href="/advent-of-code-2023">Back to Advent</Link>
          </p>
        </div>
        <div>
          <pre
            style={{
              border: 'solid 1px grey',
              padding: '10px 10px 12px',
              margin: 20,
              fontSize: 4,
              lineHeight: 1,
            }}
          >
            <code>{pipesPath.join('\n')}</code>
          </pre>
        </div>
      </div>
    </main>
  )
}

export default CoDeO
