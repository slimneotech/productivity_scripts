jup:
	jt -t oceans16 -cellw 99% -lineh 100
	.venv/bin/python -m jupyter notebook

venv_install:
	python -m virtualenv .venv
	.venv/bin/python -m pip install -r requirements.txt
	.venv/bin/python -m ipykernel install --user --name $(name)
	.venv/bin/jupyter nbextension install --py --sys-prefix jupyter_ascending
	.venv/bin/jupyter nbextension enable jupyter_ascending --sys-prefix --py
	.venv/bin/jupyter serverextension enable jupyter_ascending --sys-prefix --py


