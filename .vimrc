set runtimepath+=~/.vim_runtime
set nu
source ~/.vim_runtime/vimrcs/basic.vim
source ~/.vim_runtime/vimrcs/filetypes.vim
source ~/.vim_runtime/vimrcs/plugins_config.vim
source ~/.vim_runtime/vimrcs/extended.vim
colorscheme murphy 
try
source ~/.vim_runtime/my_configs.vim
catch
endtry
