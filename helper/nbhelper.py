import pandas as pd
import dtale
from IPython.display import HTML
from IPython.display import display


@pd.api.extensions.register_dataframe_accessor("s")
class ShowMe:
    def __init__(self, pandas_obj):
        self._obj = pandas_obj

    def __call__(self):
        # dtale.views.update_theme()
        return dtale.show(self._obj, theme="dark")


def toggle():
    display(
        HTML(
            """
        <script>
            code_show=true;
            function code_toggle() {
             if (code_show){
             $('div.input').hide();
             } else {
             $('div.input').show();
             }
             code_show = !code_show
            }
            $( document ).ready(code_toggle);
        </script>
        <form action="javascript:code_toggle()">
            <input type="submit" value="Click here to toggle on/off the raw code.">
        </form>"""
        )
    )


toggle()
