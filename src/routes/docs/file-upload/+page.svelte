<script lang="ts">
    import FileUpload from '$lib/components/FileUpload/FileUpload.svelte'



</script>



<FileUpload  label = 'selecte file ' onDeleteMultiple = {()=>true} onUploadMultiple = {()=> (['sldkfa', 'sfadsf'])} let:value multiple>
    <div>{value}</div>
</FileUpload>
<br />
<FileUpload label = 'soemethinf' onDelete = {()=>true} onUpload={()=>'slkdfja;dlk'} let:value>
    <div>{value}</div>
</FileUpload>

