// the parser goes from the regex-string to the regex-AST
parse = require('regjsparser').parse
// the generator goes the other way around
gen = require('regjsgen').generate
// we start from a trivial regex-string
orig = 'abc+'
console.log ('Original regex: ' + orig)
// turn the regex-string to regex-AST
ast = parse(orig)
// turn the regex-AST back to regex-string 
final = gen(ast)
console.log('Regex after two inverse transforms : ' + final) 
